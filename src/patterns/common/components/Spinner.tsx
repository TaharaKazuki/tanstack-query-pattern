import { Flex, Loader } from '@mantine/core'

export const Spinner = () => {
  return (
    <Flex justify="center" align="center" w="100%" style={{ aspectRatio: '2' }}>
      <Loader />
    </Flex>
  )
}
