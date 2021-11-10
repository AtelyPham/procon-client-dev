import { createSlice } from "@reduxjs/toolkit"
import { errorNotify } from "../../common/notifications"
import {
  loadingAndErrorReducers,
  stateStatus as authStatus,
} from "../../config"
import { authAction } from "./authAction"

const initialState = {
  status: authStatus.idle,
  error: null,
  data: null,
}

const { login, register } = authAction

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: {
    ...loadingAndErrorReducers(authAction),
    [login.rejected]: (state, action) => {
      state.status = authStatus.failed
      errorNotify(action.payload.error)
      state.error = action.payload
    },
    [login.fulfilled]: (state, action) => {
      state.status = authStatus.successed
      state.data = action.payload
    },
    [register.fulfilled]: (state, action) => {
      state.status = authStatus.successed
      state.data = action.payload
    },
  },
})

export default authSlice.reducer
export const { logout } = authSlice.actions
