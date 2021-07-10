import React from "react"
import { useDispatch, useSelector } from "react-redux"
import emitter from "../../adapters/emitter"
import { setAction } from "../actions/actionsSlice"
import { setCurrentAgent } from "../agents/currentAgentSlice"
import { updateTile } from "../tiles/tilesSlice"
import { selectAgentEntities, updateAgentPosition } from "./agentsSlice"

const AgentList = () => {
  const actions = useSelector(state => state.actions)
  const agentsEntitiies = useSelector(selectAgentEntities)
  const dispatch = useDispatch()

  const ack = () => {
    dispatch(updateAgentPosition(actions))
    dispatch(
      updateTile({ actions: Object.values(actions), agents: agentsEntitiies })
    )
    dispatch(setCurrentAgent(null))
    dispatch(setAction(null))
  }
  const handleClick = () => emitter.agentActions(actions, ack)

  return (
    <aside className="menu">
      <div className="menu-label">
        <h2 className="title is-5">API</h2>
      </div>
      <div className="content">
        <pre>{JSON.stringify(actions, null, 4)}</pre>
        <button className="button is-info" onClick={handleClick}>
          POST
        </button>
      </div>
    </aside>
  )
}

export default AgentList
