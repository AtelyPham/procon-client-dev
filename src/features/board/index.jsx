import { find } from "lodash"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { COLORS } from "../../common/constants"
import { findCellAround, getColorizeInitState } from "../../common/utils"
import { setAction } from "../actions/actionsSlice"
import Agent from "../agents/Agent"
import { selectAgentsByTeamId } from "../agents/agentsSlice"
import {
  selectCurrentAgent,
  setCurrentAgent,
} from "../agents/currentAgentSlice"
import Ceil from "../ceil"

const Board = () => {
  const dispatch = useDispatch()

  const board = useSelector(state => state.board)
  const tiles = useSelector(state => state.tiles)
  const playerAgents = useSelector(state => selectAgentsByTeamId(state, 0))
  const componentAgents = useSelector(state => selectAgentsByTeamId(state, 1))
  const currentAgent = useSelector(selectCurrentAgent)

  const [colorizeArr, setColorizeArr] = useState(getColorizeInitState())

  useEffect(() => {
    const agent = currentAgent
    if (currentAgent) {
      const cellsAround = findCellAround(agent.x, agent.y, board.length)
      return setColorizeArr(cellsAround)
    }
    setColorizeArr(getColorizeInitState())
  }, [board.length, currentAgent])

  const handleClick = agent => {
    if (!agent || (currentAgent !== null && currentAgent.id === agent.id)) {
      return dispatch(setCurrentAgent(null))
    }
    dispatch(setCurrentAgent(agent))
  }

  const handleAgentMove = (x, y) => {
    if (!currentAgent) {
      return
    }
    const targetTile = tiles[y][x]
    let target = null

    if (targetTile === 2 || targetTile === currentAgent.teamId) {
      // dispatch(
      //   updateAgentPosition({
      //     id: currentAgent.id,
      //     newX: x,
      //     newY: y,
      //   })
      // )
      target = currentAgent.teamId
    }

    // dispatch(
    //   updateTile({
    //     newX: x,
    //     newY: y,
    //     teamId: target,
    //   })
    // )

    const newAction = {
      agentId: currentAgent.id,
      dx: x - currentAgent.x,
      dy: y - currentAgent.y,
      type: target !== null ? "move" : "remove",
    }

    dispatch(setAction(newAction))
    dispatch(setCurrentAgent(null))
  }

  const table = board.map((row, rowIdx) => (
    <div className="row" key={rowIdx}>
      {row.map((col, colIdx) => {
        const playerAgent = find(playerAgents, { x: colIdx, y: rowIdx }) || null
        let componentAgent = null
        if (playerAgent === null)
          componentAgent =
            find(componentAgents, { x: colIdx, y: rowIdx }) || null

        const commonProps = {
          data: col,
          key: `${rowIdx} ${colIdx}`,
        }

        if (playerAgent !== null) {
          return (
            <Agent
              clicked={
                currentAgent &&
                currentAgent.x === colIdx &&
                currentAgent.y === rowIdx
              }
              onClick={() => handleClick(playerAgent)}
              teamId={0}
              {...commonProps}
            />
          )
        }

        if (componentAgent !== null) {
          return <Agent onClick={() => {}} teamId={1} {...commonProps} />
        }

        const style = {}
        const statusOfCurCell = tiles[rowIdx][colIdx]

        let validMove = false

        if (colorizeArr.x.includes(colIdx) && colorizeArr.y.includes(rowIdx)) {
          style.backgroundColor = COLORS("0.3").YELLOW
          validMove = true
        }

        if (statusOfCurCell === 0) {
          style.backgroundColor = COLORS("0.3").RED
        } else if (statusOfCurCell === 1) {
          style.backgroundColor = COLORS("0.3").BLUE
        }
        return (
          <Ceil
            col={colIdx}
            row={rowIdx}
            onClick={
              validMove
                ? () => handleAgentMove(colIdx, rowIdx)
                : () => handleClick(null)
            }
            innerStyle={style}
            {...commonProps}
          />
        )
      })}
    </div>
  ))

  return <div className="table">{table}</div>
}

export default Board
