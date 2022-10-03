import axios from 'axios'

const USER_TOKEN = localStorage.getItem('bmVvNGo6U1Q1Ykk2R1dxU200RmtHbm0yR29MSDRmdTE1M2Y3TFFadDdpM0JhQjZnYw==')
const AuthStr = 'Basic '.concat(USER_TOKEN)
const URL = 'http://localhost:3000/'

export const http = axios.create({
  baseURL: URL, headers: { 'Authorization': AuthStr, 'Content-Type': 'application/json' },
});