const listener = {}

export const initListener = socket => {
  listener["sendMatchInfo"] = cb =>
    socket.on("send-match-info", data => {
      cb(data)
    })
}

export default listener
