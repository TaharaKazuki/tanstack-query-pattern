import { ActionIcon } from '@mantine/core'
import { IconTrash } from '@tabler/icons-react'

import { useDeleteContact } from '../api/query'

type DeleteContactButtonProps = {
  contactId: string
}

export const DeleteContactButton = ({
  contactId,
}: DeleteContactButtonProps) => {
  const { mutate, isPending } = useDeleteContact()

  return (
    <ActionIcon
      color="red"
      variant="light"
      loading={isPending}
      onClick={() => mutate(contactId)}
    >
      <IconTrash />
    </ActionIcon>
  )
}
