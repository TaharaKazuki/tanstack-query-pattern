import { keepPreviousData, queryOptions } from '@tanstack/react-query'

import { client } from '../../common'

export const getContactsQueryOptions = queryOptions({
  queryKey: ['contacts', 'list'],
  queryFn: () => client.getContacts(),
})

export const getContactsPaginatedQueryOptions = (page: number, count: number) =>
  queryOptions({
    queryKey: ['contacts', 'list', { page }, { count }],
    queryFn: () => client.getContactsPaginated(page, count),
    placeholderData: keepPreviousData,
  })

export const getOneContactQueryOptions = (contactId?: string) =>
  queryOptions({
    queryKey: ['contacts', 'one', contactId],
    queryFn: () => client.getContact(contactId!),
    enabled: contactId !== undefined,
  })
