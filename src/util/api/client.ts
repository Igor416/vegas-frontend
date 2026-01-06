import axios from 'axios';

const SERVER_URL = 'http://127.0.0.1:8000'
//const SERVER_URL = ''

export const api = axios.create({
  baseURL: SERVER_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});