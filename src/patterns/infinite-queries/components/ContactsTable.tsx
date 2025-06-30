import { Alert, Anchor, Button, Card, Center, Table } from '@mantine/core'
import { useInfiniteQuery } from '@tanstack/react-query'

import { Spinner } from '../../common'
import { contactsInfiniteQueryOptions } from '../api/query'

type ContactsTableProps = {
  onContactClick: (contactId: string) => void
}

export const ContactsTable = ({ onContactClick }: ContactsTableProps) => {
  const {
    data,
    isPending,
    isError,
    refetch,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery(contactsInfiniteQueryOptions)

  if (isPending)
    return (
      <Card withBorder radius={'md'} shadow="md" m="sm">
        <Spinner />
      </Card>
    )

  if (isError)
    return (
      <Alert variant="light" color="red" title="Error loading contacts" m="sm">
        <Button color="red" onClick={() => refetch()}>
          Try Again
        </Button>
      </Alert>
    )
  return (
    <Card withBorder radius={'md'} shadow="md" m="sm">
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Name</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {data.pages
            .flatMap(page => page.contacts)
            .map(contact => (
              <Table.Tr key={contact.id}>
                <Table.Td>
                  <Anchor onClick={() => onContactClick(contact.id)}>
                    {contact.firstName + ' ' + contact.lastName}
                  </Anchor>
                </Table.Td>
              </Table.Tr>
            ))}
        </Table.Tbody>
        <Center>
          <Button
            onClick={() => fetchNextPage()}
            loading={isFetchingNextPage}
            variant="subtle"
          >
            Load more
          </Button>
        </Center>
      </Table>
    </Card>
  )
}
