import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit"
import { find } from "lodash"

const agentsAdapter = createEntityAdapter()

const initialState = agentsAdapter.getInitialState()

const agentsSlice = createSlice({
  name: "agents",
  initialState,
  reducers: {
    setNewAgents: (state, action) =>
      agentsAdapter.setAll(state, action.payload),
    updateAgentPosition: (state, action) => {
      const actions = Object.values(action.payload)
      actions.forEach(act => {
        if (act.type === "move") {
          const newX = state.entities[act.agentId].x + act.dx
          const newY = state.entities[act.agentId].y + act.dy

          const check = find(Object.values(state.entities), {
            x: newX,
            y: newY,
          })

          if (!check) {
            state.entities[act.agentId].x = newX
            state.entities[act.agentId].y = newY
          }
        }
      })
    },
  },
})

export default agentsSlice.reducer
export const { setNewAgents, updateAgentPosition } = agentsSlice.actions

export const {
  selectAll: selectAllAgents,
  selectById: selectAgentById,
  selectIds: selectAgentIds,
  selectEntities: selectAgentEntities,
} = agentsAdapter.getSelectors(state => state.agents)

export const selectAgentsByTeamId = createSelector(
  [selectAllAgents, (state, teamId) => teamId],
  (agents, teamId) => agents.filter(agent => agent.teamId === teamId)
)

export const selectAllIdsOfTeamId = createSelector(
  [selectAllAgents, (state, teamId) => teamId],
  (agents, teamId) =>
    agents.filter(agent => agent.teamId === teamId).map(agent => agent.id)
)
