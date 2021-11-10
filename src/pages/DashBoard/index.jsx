import React, { useEffect, useState } from "react"
import { Button, Icon, Section } from "react-bulma-components"
import { BiRefresh } from "react-icons/bi"
import { FaPlusCircle } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { errorNotify, successNotify } from "../../common/notifications"
import { formOpts, stateStatus } from "../../config"
import { createMatch } from "../../features/match/matchAction"
import { setStatus as setMatchStatus } from "../../features/match/matchSlice"
import { fetchMatches } from "../../features/matches/matchesAction"
import {
  addMatch,
  setStatus as setMatchesStatus,
} from "../../features/matches/matchesSlice"
import Form from "./Form"
import Table from "./Table"

const DashBoard = () => {
  const [isForm, setIsForm] = useState(false)
  const dispatch = useDispatch()

  const auth = useSelector(state => state.auth)
  const curMatch = useSelector(state => state.match.data)
  const matchStatus = useSelector(state => state.match.status)
  const matchesStatus = useSelector(state => state.matches.status)

  const history = useHistory()
  const accessToken = auth.data ? auth.data.accessToken : null

  useEffect(() => {
    if (auth.status !== stateStatus.successed) {
      history.push("/login")
    }
  }, [auth, history])

  useEffect(() => {
    if (matchStatus === stateStatus.successed) {
      successNotify("🎉 Match created!")
      const { match } = curMatch
      dispatch(
        addMatch({
          matchId: match.matchId,
          numOfAgents: match.agents.length / 2,
          size: match.board.length,
          totalTurns: match.totalTurns,
          turnTime: match.turnTime,
        })
      )
      dispatch(setMatchStatus(stateStatus.idle))
      history.push(`/match/${curMatch.match.matchId}`)
    }

    if (matchStatus === stateStatus.failed) {
      setIsForm(false)
      errorNotify("🙅🏼 Error when creating match!")
      dispatch(setMatchStatus(stateStatus.idle))
    }
  }, [matchStatus, curMatch, history, dispatch])

  useEffect(() => {
    if (matchesStatus === stateStatus.failed) {
      errorNotify("🙅🏼 Error when fetching matches!")
      dispatch(setMatchesStatus(stateStatus.idle))
    }

    if (matchesStatus === stateStatus.successed) {
      successNotify("👏🏻 Fetched matches successfully!")
      dispatch(setMatchesStatus(stateStatus.idle))
    }
  }, [matchesStatus, dispatch])

  useEffect(() => {
    dispatch(fetchMatches({ accessToken }))
  }, [dispatch, accessToken])

  const onCreate = (idx, minPoint, maxPoint) => {
    const option = Object.entries(formOpts).reduce((acc, [key, values]) => {
      const text = (key.charAt(0).toLowerCase() + key.slice(1)).replace(
        /\s([A-Z])/g,
        "$1"
      )
      acc[text] = values[idx]
      return acc
    }, {})

    option["minPoint"] = minPoint
    option["maxPoint"] = maxPoint
    dispatch(createMatch({ accessToken, option }))
  }

  return (
    <Section>
      <h1 className="title">DashBoard</h1>
      <Button.Group align="right">
        <Button
          color="info"
          onClick={() => dispatch(fetchMatches({ accessToken }))}
          loading={matchesStatus === "loading" ? true : false}
        >
          <Icon>
            <BiRefresh />
          </Icon>
          <span>Refresh</span>
        </Button>
        <Button color="success" onClick={() => setIsForm(true)}>
          <Icon>
            <FaPlusCircle />
          </Icon>
          <span>New</span>
        </Button>
      </Button.Group>
      <Table />
      {isForm && (
        <Form
          onBlur={() => setIsForm(false)}
          onCreate={onCreate}
          status={matchStatus}
        />
      )}
    </Section>
  )
}

export default DashBoard
