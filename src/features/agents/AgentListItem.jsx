import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectAgentById } from "./agentsSlice"
import { selectCurrentAgent, setCurrentAgent } from "./currentAgentSlice"

const AgentListItem = ({ id, count }) => {
  const currentAgent = useSelector(selectCurrentAgent)
  const agent = useSelector(state => selectAgentById(state, id))
  const dispatch = useDispatch()

  const handleClick = () => {
    if (!currentAgent || currentAgent.id !== agent.id) {
      dispatch(setCurrentAgent(agent))
    }
  }

  return <h1 onClick={handleClick}>Agent {count}</h1>
}

export default AgentListItem
