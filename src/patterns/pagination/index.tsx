import { QueryProvider } from '../common'

import { ContactsPage } from './components/ContactsPage'

export default function Pattern5() {
  return (
    <QueryProvider>
      <ContactsPage />
    </QueryProvider>
  )
}
