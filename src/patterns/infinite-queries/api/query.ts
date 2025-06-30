import {
  infiniteQueryOptions,
  keepPreviousData,
  queryOptions,
} from '@tanstack/react-query'

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

export const contactsInfiniteQueryOptions = infiniteQueryOptions({
  queryKey: ['contacts', 'list'],
  queryFn: ({ pageParam }) => client.getContactsInfinite(pageParam),
  initialPageParam: { cursor: undefined as string | undefined },
  getNextPageParam: lastPage => ({ cursor: lastPage.nextCursor }),
})
