import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ContactsPage from './components/ContactsPage'

export const queryClient = new QueryClient()

export default function Pattern2() {
  return (
    <QueryClientProvider client={queryClient}>
      <ContactsPage />
    </QueryClientProvider>
  )
}
