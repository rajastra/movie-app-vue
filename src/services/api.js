import axios from 'axios'

const ENDPOINT = 'http://api.tvmaze.com/search/shows?q=girls'

export async function getAllShows() {
  const response = await axios.get(`${ENDPOINT}`)
  return response?.data
}
