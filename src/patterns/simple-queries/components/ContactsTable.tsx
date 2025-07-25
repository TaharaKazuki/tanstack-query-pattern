import { Alert, Button, Card, Table } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'

import { client, Spinner } from '../../common'

export const ContactsTable = () => {
  const { data, isPending, isError, refetch } = useQuery({
    queryKey: ['contacts', 'list'],
    queryFn: () => client.getContacts(),
  })

  if (isPending)
    return (
      <Card withBorder radius={'md'} shadow="md" m="sm">
        {isPending && <Spinner />}
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
          {data.contacts.map(contact => (
            <Table.Tr key={contact.id}>
              <Table.Td>{contact.firstName + ' ' + contact.lastName}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Card>
  )
}
