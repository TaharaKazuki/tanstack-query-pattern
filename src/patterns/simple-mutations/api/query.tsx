import { notifications } from '@mantine/notifications'
import { IconCircleCheckFilled, IconCircleXFilled } from '@tabler/icons-react'
import {
  keepPreviousData,
  queryOptions,
  useMutation,
} from '@tanstack/react-query'

import { client, queryClient } from '../../common'

const queryKeys = {
  all: () => ['contacts'],
  getContacts: (page?: number, count?: number) => [
    ...queryKeys.all(),
    'list',
    { page },
    { count },
  ],
  getContact: (contactId: string | undefined) => [
    ...queryKeys.all(),
    'one',
    { contactId },
  ],
}

export const getContactsQueryOptions = queryOptions({
  queryKey: queryKeys.getContacts(),
  queryFn: () => client.getContacts(),
})

export const getContactsPaginatedQueryOptions = (page: number, count: number) =>
  queryOptions({
    queryKey: queryKeys.getContacts(page, count),
    queryFn: () => client.getContactsPaginated(page, count),
    placeholderData: keepPreviousData,
  })

export const getOneContactQueryOptions = (contactId?: string) =>
  queryOptions({
    queryKey: queryKeys.getContact(contactId),
    queryFn: () => client.getContact(contactId!),
    enabled: contactId !== undefined,
  })

export const useDeleteContact = () => {
  return useMutation({
    mutationFn: (contactId: string) => client.deleteContact(contactId),
    onSuccess: () => {
      notifications.show({
        icon: <IconCircleCheckFilled />,
        color: 'green',
        message: 'Contact deleted',
      })
    },
    onError: () =>
      notifications.show({
        icon: <IconCircleXFilled />,
        color: 'red',
        message: 'Error deleting contact',
      }),
    onSettled: () => queryClient.refetchQueries({ queryKey: queryKeys.all() }),
  })
}
