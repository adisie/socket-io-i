import {io} from 'socket.io-client'

export const SOCKET = io('ws://localhost:5000')
export const BASE_URL = 'http://localhost:5000'
