import data from "./data"

const fetchData = (delay = 500) =>
  new Promise(resolve => setTimeout(() => resolve(data), delay))

export default fetchData
