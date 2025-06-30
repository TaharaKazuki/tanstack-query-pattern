import {
  Alert,
  Anchor,
  Button,
  Card,
  Loader,
  Pagination,
  Table,
} from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import { Spinner } from '../../common'
import { getContactsPaginatedQueryOptions } from '../api/query'

type ContactsTableProps = {
  onContactClick: (contactId: string) => void
}

export const ContactsTable = ({ onContactClick }: ContactsTableProps) => {
  const [page, setPage] = useState(1)

  const { data, isPending, isError, refetch, isFetching, isPlaceholderData } =
    useQuery(getContactsPaginatedQueryOptions(page, 20))

  // 初回ロード時のみSpinnerを表示
  if (isPending && !isPlaceholderData)
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
        disabled={isFetching}
      />
      {isFetching && isPlaceholderData && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 10,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '50%',
            padding: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Loader size="sm" />
        </div>
      )}
    </Card>
  )
}
