import { createSlice } from "@reduxjs/toolkit"

const teamsSlice = createSlice({
  name: "teams",
  initialState: [],
  reducers: {
    pushNewTeam: (state, action) => {
      return state.concat(action.payload)
    },
  },
})

export default teamsSlice.reducer
export const { pushNewTeam } = teamsSlice.actions
