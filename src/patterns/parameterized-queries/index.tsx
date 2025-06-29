import { ContactsPage, QueryProvider } from '../common'
import { ContactsTable } from './components/ContactsTable'

export default function Pattern4() {
  return (
    <QueryProvider>
      <ContactsPage ContactsTableComponent={ContactsTable} />
    </QueryProvider>
  )
}
