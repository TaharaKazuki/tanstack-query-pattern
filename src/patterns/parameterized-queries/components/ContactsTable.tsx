import { Alert, Anchor, Button, Card, Table } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import { Spinner } from '../../common'
import { getContactsQueryOptions } from '../api/query'

type ContactsTableProps = {
  onContactClick: (contactId: string) => void
}

export const ContactsTable = ({ onContactClick }: ContactsTableProps) => {
  const [isEnabled, setIsEnabled] = useState(false)

  const { data, isPending, isError, refetch } = useQuery({
    ...getContactsQueryOptions,
    enabled: isEnabled,
  })

  if (!isEnabled)
    return (
      <Card withBorder radius={'md'} shadow="md" m="sm">
        <Button onClick={() => setIsEnabled(true)}>Load Contacts</Button>
      </Card>
    )

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
              <Table.Td>
                <Anchor onClick={() => onContactClick(contact.id)}>
                  {contact.firstName + ' ' + contact.lastName}
                </Anchor>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Card>
  )
}
