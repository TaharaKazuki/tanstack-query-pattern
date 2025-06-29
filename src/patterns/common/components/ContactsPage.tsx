import { Layout } from './Layout'
import { TopBar } from './TopBar'

import type { ComponentType } from 'react'

type ContactsPageProps = {
  ContactsTableComponent: ComponentType
}

export const ContactsPage = ({ ContactsTableComponent }: ContactsPageProps) => {
  return (
    <Layout>
      <TopBar />
      <ContactsTableComponent />
    </Layout>
  )
}
