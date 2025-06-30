import { keepPreviousData, queryOptions } from '@tanstack/react-query'

import { client } from '../../common'

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
