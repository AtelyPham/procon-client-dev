import { configureStore } from "@reduxjs/toolkit"
import actionsReducer from "../features/actions/actionsSlice"
import agentsReducer from "../features/agents/agentsSlice"
import currentAgentReducer from "../features/agents/currentAgentSlice"
import boardReducer from "../features/board/boardSlice"
import counterReducer from "../features/counter/counterSlice"
// import teamsReducer from "../features/teams/teamsSlice"
import tilesReducer from "../features/tiles/tilesSlice"
import turnsReducer from "../features/turns/turnsSlice"

import normalizeAgentDataMiddleware from "../features/middlewares/normalizeAgentDataMiddleware"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    board: boardReducer,
    // teams: teamsReducer,
    agents: agentsReducer,
    currentAgent: currentAgentReducer,
    tiles: tilesReducer,
    turns: turnsReducer,
    actions: actionsReducer,
  },
  middleware: [normalizeAgentDataMiddleware],
})
