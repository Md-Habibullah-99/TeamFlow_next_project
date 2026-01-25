'use client'

import { useState } from 'react'
import { createQueryClient } from './query/client'
import { QueryClientProvider } from '@tanstack/react-query'

export function Providers({ children }) {
  const [queryClient] = useState(() => createQueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}