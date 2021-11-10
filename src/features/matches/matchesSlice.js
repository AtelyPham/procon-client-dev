import { createSlice } from "@reduxjs/toolkit"
import { fetchMatches } from "./matchesAction"
import { stateStatus as matchesStatus } from "../../config"

const initialState = {
  status: "idle",
  error: null,
  data: [],
}

const matchesSlice = createSlice({
  name: "matches",
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload
    },
    addMatch: (state, action) => {
      const match = action.payload
      const idx = state.data.findIndex(m => m.matchId === match.matchId)
      if (idx === -1) {
        state.data.push(match)
      }
    },
  },
  extraReducers: {
    [fetchMatches.pending]: state => {
      state.status = matchesStatus.loading
      state.error = null
    },
    [fetchMatches.fulfilled]: (state, action) => {
      state.status = matchesStatus.successed
      state.data = action.payload
    },
    [fetchMatches.rejected]: (state, action) => {
      state.status = matchesStatus.failed
      state.error = action.error.message
    },
  },
})

export default matchesSlice.reducer
export const { addMatch, setStatus } = matchesSlice.actions
