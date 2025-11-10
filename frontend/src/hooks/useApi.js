import axios from 'axios'
const API = import.meta.env.VITE_API_URL || 'http://localhost:4000'
export default function useApi(){
  const sessionRaw = localStorage.getItem('session_v1')
  const token = sessionRaw ? JSON.parse(sessionRaw).token : null
  const client = axios.create({ baseURL: API, headers: token ? { Authorization: `Bearer ${token}` } : {} })
  return client
}
