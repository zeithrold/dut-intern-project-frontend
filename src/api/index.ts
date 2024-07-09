import axios from 'axios'

const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT

function createClient() {
  return axios.create({
    baseURL: API_ENDPOINT,
  })
}

export { createClient }
