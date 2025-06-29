import { useQuery } from '@tanstack/react-query'

import { client } from '../../common'

export const useContacts = () =>
  useQuery({
    queryKey: ['contacts', 'list'],
    queryFn: () => client.getContacts(),
  })
