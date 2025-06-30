import { QueryProvider } from '../common'

import { ContactsPage } from './components/ContactsPage'

export default function Pattern4() {
  return (
    <QueryProvider>
      <ContactsPage />
    </QueryProvider>
  )
}
