import useSWR from 'swr'

function useCounts() {
  return useSWR('/api/metadata', async (url) => {
    // const response = await fetch(url);
    // return response.json();
    await new Promise(resolve => setTimeout(resolve, 1000))
    return {
      // A test data
      // TODO: Should be implemented by OpenAPI from backend
      document: 300,
      future: 1300,
    }
  })
}

export {
  useCounts,
}
