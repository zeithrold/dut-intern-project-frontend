import React from 'react'
import z from 'zod'
import useSWR from 'swr'
import { createClient } from '.'

const FutureDataSchema = z.object({
  labels: z.array(z.string()),
  datasets: z.array(z.object({
    label: z.string(),
    data: z.array(z.number()),
  })),
})

function useFutureData(future: string) {
  return useSWR(`/data/future/${future}`, async (url) => {
    const client = createClient()
    const response = await client.get(url)
    return FutureDataSchema.parse(response.data)
  })
}

export {
  useFutureData,
  FutureDataSchema,
}
