import { QueryProvider } from '../common'

import { ContactsPage } from './components/ContactsPage'

export default function Pattern7() {
  return (
    <QueryProvider>
      <ContactsPage />
    </QueryProvider>
  )
}
