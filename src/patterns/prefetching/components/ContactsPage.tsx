import { useState } from 'react'

import { Layout, TopBar } from '../../common'

import { ContactDetailsModal } from './ContactDetailsModal'
import { ContactsTable } from './ContactsTable'

export const ContactsPage = () => {
  const [selectedContactId, setSelectedContactId] = useState<
    string | undefined
  >(undefined)

  return (
    <Layout>
      <TopBar />
      <ContactsTable onContactClick={setSelectedContactId} />
      <ContactDetailsModal
        contactId={selectedContactId}
        onClose={() => setSelectedContactId(undefined)}
      />
    </Layout>
  )
}
