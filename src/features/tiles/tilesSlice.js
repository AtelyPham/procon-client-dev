import { createSlice } from "@reduxjs/toolkit"

const tilesSlice = createSlice({
  name: "tiles",
  initialState: [],
  reducers: {
    setNewTiles: (state, action) => action.payload,
    updateTile: (state, action) => {
      const { actions, agents } = action.payload

      actions.forEach(act => {
        const { x, y, teamId } = agents[act.agentId]

        if (act.type === "move") {
          state[y + act.dy][x + act.dx] = teamId
        }
      })
    },
  },
})

export default tilesSlice.reducer
export const { setNewTiles, updateTile } = tilesSlice.actions
