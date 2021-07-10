import { io } from "socket.io-client"
import { initEmitter } from "./emitter"
import { initListener } from "./listener"

const socket = io("http://localhost:5000")

socket.on("connect", () => {
  initListener(socket)
  initEmitter(socket)
})

export default socket
