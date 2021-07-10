const { createSlice } = require("@reduxjs/toolkit")

/*
const initialState = {
  agentId: "",
  dx: null, // -1, 0, 1
  dy: null, // -1, 0, 1
  type: null, // stay, remove, move
}
*/

const actionsSlice = createSlice({
  name: "actionsSlice",
  initialState: null,
  reducers: {
    setAction: (state, action) => {
      if (state === null) {
        state = {}
      }
      if (!action.payload) {
        return action.payload
      }
      state[action.payload.agentId] = action.payload
      return state
    },
  },
})

export default actionsSlice.reducer
export const { setAction } = actionsSlice.actions
