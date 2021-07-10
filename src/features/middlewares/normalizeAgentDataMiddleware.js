const normalizeAgentDataMiddleware = storeAPI => next => action => {
  if (action.type === "agents/setNewAgents") {
    const teamIds = Object.keys(action.payload)
    const agents = []

    teamIds.forEach((teamId, idx) => {
      const agentsObj = action.payload[teamId].agents
      const agentIds = Object.keys(agentsObj)

      agentIds.forEach(agentId => {
        const agentObj = agentsObj[agentId]
        agentObj.id = agentObj.agentId
        delete agentObj.agentId
        agentObj["teamId"] = idx
        agents.push(agentObj)
      })
    })
    action.payload = agents
  }
  return next(action)
}

export default normalizeAgentDataMiddleware
