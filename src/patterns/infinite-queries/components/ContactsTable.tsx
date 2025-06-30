import { Alert, Anchor, Button, Card, Pagination, Table } from '@mantine/core'
import { useQuery, usePrefetchQuery } from '@tanstack/react-query'
import { useState, useEffect } from 'react'

import { Spinner } from '../../common'
import { getContactsPaginatedQueryOptions } from '../api/query'

type ContactsTableProps = {
  onContactClick: (contactId: string) => void
}

export const ContactsTable = ({ onContactClick }: ContactsTableProps) => {
  const [page, setPage] = useState(1)

  const { data, isPending, isError, refetch } = useQuery(
    getContactsPaginatedQueryOptions(page, 20)
  )

  usePrefetchQuery(getContactsPaginatedQueryOptions(page + 1, 20))

  useEffect(() => {
    console.log(`🔄 Page changed to ${page}, prefetching page ${page + 1}`)
  }, [page])

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
    <Card
      withBorder
      radius={'md'}
      shadow="md"
      m="sm"
      style={{ position: 'relative' }}
    >
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Name</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {data.contacts.map(contact => (
            <Table.Tr key={contact.id}>
              <Table.Td>
                <Anchor onClick={() => onContactClick(contact.id)}>
                  {contact.firstName + ' ' + contact.lastName}
                </Anchor>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
      <Pagination
        total={data.pagination.pageCount}
        value={page}
        onChange={setPage}
        className="mx-auto"
      />
    </Card>
  )
}
