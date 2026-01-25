import { createQueryClient } from './client'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import { cache } from 'react'

export const getQueryClient = cache(createQueryClient)

export function HydrateClient({ children, client }) {
  return (
    <HydrationBoundary state={dehydrate(client)}>
      {children}
    </HydrationBoundary>
  )
}