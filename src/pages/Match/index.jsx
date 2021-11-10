import React, { useEffect, useState } from "react"
import {
  Block,
  Box,
  Button,
  Level,
  Message,
  Section,
  Table,
} from "react-bulma-components"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import TeamInfo from "./TeamInfo"
import { fetchMatch } from "../../features/match/matchAction"
import { setMatch, setStatus } from "../../features/match/matchSlice"
import { stateStatus } from "../../config"

const COLOR = [
  ["rgba(255, 0, 0, 0.4)", "rgba(255, 0, 0, 0.7)"],
  ["rgba(0, 255, 0, 0.4)", "rgba(0, 255, 0, 0.7)"],
]

const Game = () => {
  // const { data: curMatch } = data
  const [isFetch, setIsFetch] = useState(false)
  const { matchId } = useParams()
  const dispatch = useDispatch()

  const auth = useSelector(state => state.auth)
  const curMatch = useSelector(state => state.match.data)
  const error = useSelector(state => state.match.error)
  const matchStatus = useSelector(state => state.match.status)

  const isGameExist = Boolean(curMatch && curMatch.match.matchId === matchId)
  const accessToken = auth.data ? auth.data.accessToken : null

  useEffect(() => {
    return () => {
      dispatch(setMatch(null))
    }
  }, [dispatch])

  useEffect(() => {
    if (!isGameExist && !isFetch) {
      setIsFetch(true)
      dispatch(fetchMatch({ accessToken, matchId }))
    }
  }, [accessToken, dispatch, isGameExist, isFetch, matchId])

  useEffect(() => {
    if (
      matchStatus === stateStatus.successed ||
      matchStatus === stateStatus.failed
    ) {
      dispatch(setStatus(stateStatus.idle))
    }
  }, [dispatch, matchStatus])

  if (!isGameExist && !isFetch) {
    return <h1 className="title">Fetching match!</h1>
  }

  if (!isGameExist && isFetch) {
    if (error === "Not found!") {
      return <h1 className="title">Not found match with id {matchId}</h1>
    }
    return <h1 className="title">{error}</h1>
  }

  const { agents, teams: teamIds } = curMatch.match

  return (
    <Section>
      <Block
        display="flex"
        justifyContent="space-around"
        alignItems="flex-start"
        flexWrap="wrap"
      >
        <TeamInfo
          text="Team 1"
          token={curMatch.team1.token}
          teamId={curMatch.team1.teamId}
        />
        <TeamInfo
          text="Team 2"
          token={curMatch.team2.token}
          teamId={curMatch.team2.teamId}
        />
      </Block>
      <Block>
        <Message>
          <Message.Header>Match id: {curMatch.match.matchId}</Message.Header>
          <Message.Body>
            <Button.Group align="right">
              <Button color="success">Start</Button>
              <Button color="warning">Stop</Button>
              <Button color="danger">Delete</Button>
            </Button.Group>
            <Level>
              <Level.Item textAlign="center">
                <div>
                  <p className="heading">Team 1 Point</p>
                  <p className="title">{curMatch.team1.tilePoint}</p>
                </div>
              </Level.Item>
              <Level.Item textAlign="center">
                <div>
                  <p className="heading">Team 2 Point</p>
                  <p className="title">{curMatch.team2.tilePoint}</p>
                </div>
              </Level.Item>
            </Level>
            <Box>
              <Table.Container display="flex" justifyContent="center">
                <Table bordered={true} textAlign="center">
                  <tbody>
                    {curMatch.match.board.map((row, i) => {
                      return (
                        <tr key={i}>
                          {row.map((num, j) => {
                            const tile = curMatch.match.tiles[i][j]
                            const agentIdx = agents.findIndex(
                              ({ x, y }) => x === i && y === j
                            )
                            const cellStyle = {}
                            if (agentIdx !== -1) {
                              const teamIdx = teamIds.indexOf(
                                agents[agentIdx].teamId
                              )
                              cellStyle["backgroundColor"] = COLOR[teamIdx][1]
                            } else if (tile) {
                              cellStyle["backgroundColor"] =
                                tile === curMatch.team1.teamId
                                  ? COLOR[0][0]
                                  : COLOR[1][0]
                            }
                            return (
                              <td key={j} style={cellStyle}>
                                {num}
                              </td>
                            )
                          })}
                        </tr>
                      )
                    })}
                  </tbody>
                </Table>
              </Table.Container>
            </Box>
            <Level>
              <Level.Item textAlign="center">
                <div>
                  <p className="heading">Current Time</p>
                  <span className="title">0</span>
                  <span className="title">/{curMatch.match.turnTime}</span>
                </div>
              </Level.Item>
              <Level.Item textAlign="center">
                <div>
                  <p className="heading">Turn</p>
                  <span className="title">0</span>
                  <span className="title">/{curMatch.match.totalTurns}</span>
                </div>
              </Level.Item>
            </Level>
          </Message.Body>
        </Message>
      </Block>
    </Section>
  )
}

export default Game
