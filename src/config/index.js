import axios from "./axios"
import formOpts from "./formOpts"

export const stateStatus = {
  idle: "idle",
  loading: "loading",
  successed: "successed",
  failed: "failed",
}

const loadingFunc = state => {
  state.status = stateStatus.loading
  state.error = null
}

const failedFunc = (state, action) => {
  state.status = stateStatus.failed
  state.error = action.error
}

export const loadingAndErrorReducers = (asyncActions, extraReducers = {}) => {
  Object.entries(asyncActions).forEach(([_, func]) => {
    extraReducers[func.pending] = loadingFunc
    extraReducers[func.rejected] = failedFunc
  })
  return extraReducers
}

export const links = {
  facebook: "https://www.facebook.com/phamtrung.tin.739",
  github: "https://github.com/atelyPham/",
  linkedin: "https://www.linkedin.com/in/tin-pham-trung-37538b211/",
  gmail: "tinpham1412000@gmail.com",
}

export { axios, formOpts }
