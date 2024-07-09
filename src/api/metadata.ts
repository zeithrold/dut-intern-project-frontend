import useSWR from 'swr'
import z from 'zod'
import { createClient } from '.'

const MetadataSchema = z.object({
  company_count: z.number(),
  future_count: z.number(),
})

function useCounts() {
  return useSWR('/data/metadata', async (url) => {
    const client = createClient()
    const response = await client.get(url)
    return MetadataSchema.parse(response.data)
  })
}

export {
  useCounts,
  MetadataSchema,
}
