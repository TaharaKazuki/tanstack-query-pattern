import { QueryProvider } from '../common'

import { ContactsPage } from './components/ContactsPage'

export default function Pattern10() {
  return (
    <QueryProvider>
      <ContactsPage />
    </QueryProvider>
  )
}
