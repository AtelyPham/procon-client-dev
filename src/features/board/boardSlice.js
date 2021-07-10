import { createSlice } from "@reduxjs/toolkit"

const boardSlice = createSlice({
  name: "board",
  initialState: [],
  reducers: {
    setNewBoard: (state, action) => action.payload,
  },
})

export default boardSlice.reducer
export const { setNewBoard } = boardSlice.actions
