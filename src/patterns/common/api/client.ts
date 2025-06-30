import { faker } from '@faker-js/faker'

export type Contact = {
  id: string
  firstName: string
  lastName: string
  phoneNumber: string
  address: string
}

export type GetContactsResponse = {
  contacts: Contact[]
}

const sleep = () => new Promise(resolve => setTimeout(resolve, 500))

const initialContacts = new Array(500).fill(0).map(() => ({
  id: faker.string.uuid(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  phoneNumber: faker.phone.number({ style: 'international' }),
  address: faker.location.secondaryAddress(),
}))

export const client = {
  async getContacts(): Promise<GetContactsResponse> {
    await sleep()
    return {
      contacts: initialContacts,
    }
  },

  async getContactsPaginated(page: number, count: number) {
    await sleep()
    const { items, hasNextPage, pageCount } = pagination(
      initialContacts,
      page,
      count
    )
    return {
      contacts: items,
      pagination: {
        hasNextPage,
        pageCount,
      },
    }
  },

  async getContact(contactId: string): Promise<Contact | undefined> {
    await sleep()
    return initialContacts.find(contact => contact.id === contactId)
  },
}

const pagination = <T>(items: T[], page: number, count: number) => {
  const start = (page - 1) * count
  const end = start + count
  const paginatedItems = items.slice(start, end)
  const pageCount = Math.ceil(items.length / count)
  const hasNextPage = page < pageCount
  return { items: paginatedItems, hasNextPage, pageCount }
}
