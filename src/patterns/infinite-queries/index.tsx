import { QueryProvider } from '../common'

import { ContactsPage } from './components/ContactsPage'

export default function Pattern8() {
  return (
    <QueryProvider>
      <ContactsPage />
    </QueryProvider>
  )
}
