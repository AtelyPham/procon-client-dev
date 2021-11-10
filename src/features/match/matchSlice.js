import { createSlice } from "@reduxjs/toolkit"
import {
  loadingAndErrorReducers,
  stateStatus as matchStatus,
} from "../../config"
import matchAction from "./matchAction"

const initialState = {
  status: matchStatus.idle,
  error: null,
  data: null,
}

const { fetchMatch, deleteMatch, createMatch } = matchAction

const matchSlice = createSlice({
  name: "match",
  initialState,
  reducers: {
    setMatch: (state, action) => {
      state.data = action.payload
    },
    setStatus: (state, action) => {
      state.status = action.payload
    },
  },
  extraReducers: {
    ...loadingAndErrorReducers(matchAction),
    [createMatch.fulfilled]: (state, action) => {
      state.status = matchStatus.successed
      state.data = action.payload
    },
    [deleteMatch.fulfilled]: state => {
      state.status = matchStatus.successed
      state.data = null
    },
    [fetchMatch.fulfilled]: (state, action) => {
      state.status = matchStatus.successed
      state.data = action.payload
    },
  },
})

export default matchSlice.reducer
export const { setMatch, setStatus } = matchSlice.actions
