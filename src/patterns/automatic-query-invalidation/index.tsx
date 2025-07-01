import { notifications } from '@mantine/notifications'
import { IconCircleCheckFilled, IconCircleXFilled } from '@tabler/icons-react'
import {
  MutationCache,
  QueryClient,
  QueryClientProvider,
  type QueryKey,
} from '@tanstack/react-query'

import { ContactsPage } from './components/ContactsPage'

const queryClient = new QueryClient({
  mutationCache: new MutationCache({
    onSuccess: (_data, _variables, _context, mutation) => {
      if (mutation.meta?.successMessage) {
        notifications.show({
          icon: <IconCircleCheckFilled />,
          color: 'green',
          message: mutation.meta.successMessage as string,
        })
      }
    },
    onError: (_error, _variables, _context, mutation) => {
      if (mutation.meta?.errorMessage) {
        notifications.show({
          icon: <IconCircleXFilled />,
          color: 'red',
          message: mutation.meta.errorMessage as string,
        })
      }
    },
    onSettled: (_data, _error, _variables, _context, mutation) => {
      if (mutation.meta?.invalidateQueries) {
        queryClient.invalidateQueries({
          queryKey: mutation.meta?.invalidateQueries as QueryKey,
        })
      }
    },
  }),
})

export default function Pattern10() {
  return (
    <QueryClientProvider client={queryClient}>
      <ContactsPage />
    </QueryClientProvider>
  )
}
