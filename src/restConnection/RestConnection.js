import axios from 'axios'

const API_URL = process.env.API_URL || 'http://localhost:3000/api'

const RestConnection = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.token,
    'Usuario': '1'
  }
})

export default RestConnection