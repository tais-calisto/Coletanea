import axios from 'axios'

const customFetch = axios.create({ baseURL: 'http://coletanea/api/v1' })

export default customFetch
