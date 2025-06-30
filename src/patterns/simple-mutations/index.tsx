import { QueryProvider } from '../common'

import { ContactsPage } from './components/ContactsPage'

export default function Pattern9() {
  return (
    <QueryProvider>
      <ContactsPage />
    </QueryProvider>
  )
}
