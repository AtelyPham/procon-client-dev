import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../features/auth/authSlice"
import counterReducer from "../features/counter/counterSlice"
import matchReducer from "../features/match/matchSlice"
import matchesReducer from "../features/matches/matchesSlice"

// import normalizeAgentDataMiddleware from "../features/middlewares/normalizeAgentDataMiddleware"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    counter: counterReducer,
    match: matchReducer,
    matches: matchesReducer,
  },
  // middleware: [normalizeAgentDataMiddleware],
})
