import { inRange, cloneDeep } from "lodash"

export const getColorizeInitState = () => cloneDeep({ x: [], y: [] })

export const findCellAround = (x, y, size) => {
  const cellsAround = getColorizeInitState()
  const dxs = [-1, 0, 1]
  const dys = [-1, 0, 1]
  for (let dx of dxs) {
    for (let dy of dys) {
      const check =
        !(dx === 0 && dy === 0) &&
        inRange(x + dx, 0, size) &&
        inRange(y + dy, 0, size)
      if (check) {
        cellsAround.x.push(x + dx)
        cellsAround.y.push(y + dy)
      }
    }
  }
  return cellsAround
}
