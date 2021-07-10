import { createSelector, createSlice } from "@reduxjs/toolkit"

const currentAgentSlice = createSlice({
  name: "currentAgent",
  initialState: null,
  reducers: {
    setCurrentAgent: (state, action) => action.payload,
  },
})

export const { setCurrentAgent } = currentAgentSlice.actions
export default currentAgentSlice.reducer

export const selectCurrentAgent = createSelector(
  state => state,
  state => state.currentAgent
)
