import axios from 'axios'

const customFetch = axios.create({
  baseURL: 'https://coletanea-api.onrender.com',
})

export default customFetch
