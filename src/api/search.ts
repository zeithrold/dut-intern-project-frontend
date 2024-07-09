import useSWR from 'swr'
import z from 'zod'
import { createClient } from '.'

const SearchResultSchema = z.object({
  results: z.array(z.string()),
})

function useSearch(query: string) {
  return useSWR(`/data/future?kw=${query}`, async (url) => {
    if (!query)
      return SearchResultSchema.parse({ results: [] })
    const client = createClient()
    const response = await client.get(url)
    return SearchResultSchema.parse(response.data)
  })
}

export {
  useSearch,
  SearchResultSchema,
}
