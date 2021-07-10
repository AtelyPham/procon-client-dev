const emitter = {}

export const initEmitter = socket => {
  emitter.getMatch = () => socket.emit("get-match")
  emitter.agentActions = (action, ack) =>
    socket.emit("agent-actions", action, ack)
}

export default emitter
