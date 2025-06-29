import { QueryClientProvider } from '@tanstack/react-query'

import { queryClient } from '../api/query-client'

import type { ReactNode } from 'react'

type QueryProviderProps = {
  children: ReactNode
}

export const QueryProvider = ({ children }: QueryProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
