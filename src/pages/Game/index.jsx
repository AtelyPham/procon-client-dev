import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import emitter from "../../adapters/emitter"
import listener from "../../adapters/listener"
import socket from "../../adapters/socket"
import AgentList from "../../features/agents/AgentList"
import { setNewAgents } from "../../features/agents/agentsSlice"
import Board from "../../features/board"
import { setNewBoard } from "../../features/board/boardSlice"
import { setNewTiles } from "../../features/tiles/tilesSlice"
import TurnInfo from "../../features/turns"
import { setTurnsState } from "../../features/turns/turnsSlice"
import Loading from "../../pages/Loading"

const Game = () => {
  const dispatch = useDispatch()
  const [loading, setloading] = useState(null)

  useEffect(() => {
    const dispatchAll = data => {
      dispatch(setNewBoard(data.points))
      // dispatch(pushNewTeam(data.teams))
      dispatch(setNewAgents(data.teams))
      dispatch(setNewTiles(data.tiles))
      dispatch(
        setTurnsState({
          turnTime: data.turnTime,
          totalTurns: data.totalTurns,
        })
      )
      setloading(false)
    }
    const get = async () => {
      setloading(true)
      socket.on("connect", () => {
        emitter.getMatch()
        listener.sendMatchInfo(dispatchAll)
      })
    }
    get()
  }, [dispatch])

  if (loading === null || loading) {
    return <Loading />
  }

  return (
    <div className="contanier">
      <div
        className="columns"
        style={{
          marginTop: "10px",
        }}
      >
        <div className="column is-three-quarters">
          <Board />
        </div>
        <div className="column">
          <AgentList />
        </div>
      </div>
      <footer className="footer">
        <TurnInfo />
      </footer>
    </div>
  )
}

export default Game
