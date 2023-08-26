import dotenv from 'dotenv'
dotenv.config()
import { Server } from "./src/server/models/server.js"

const server = new Server()

server.listen()