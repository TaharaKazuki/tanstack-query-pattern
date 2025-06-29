import { ContactsPage, QueryProvider } from '../common'
import { ContactsTable } from './components/ContactsTable'

export default function Pattern1() {
  return (
    <QueryProvider>
      <ContactsPage ContactsTableComponent={ContactsTable} />
    </QueryProvider>
  )
}
