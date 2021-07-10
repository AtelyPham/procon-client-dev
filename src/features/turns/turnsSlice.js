import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  totalTurns: 0,
  turnTime: 0,
}

const turnsSlice = createSlice({
  name: "turns",
  initialState,
  reducers: {
    setTurnsState: (state, action) => action.payload,
  },
})

export default turnsSlice.reducer
export const { setTurnsState } = turnsSlice.actions
