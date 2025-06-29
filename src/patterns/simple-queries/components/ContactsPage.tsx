import { ContactsTable } from './ContactsTable'
import { Layout } from './Layout'
import { TopBar } from './TopBar'

export default function ContactsPage() {
  return (
    <Layout>
      <TopBar />
      <ContactsTable />
    </Layout>
  )
}
