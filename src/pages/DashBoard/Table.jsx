import React from "react"
import { Button } from "react-bulma-components"
import { FaEye } from "react-icons/fa"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

const Table = () => {
  const history = useHistory()
  const matches = useSelector(state => state.matches.data)

  const bodyList = matches.map((match, idx) => (
    <tr key={idx}>
      <td>{idx + 1}</td>
      <td>{match.matchId}</td>
      <td>{match.size}</td>
      <td>{match.numOfAgents}</td>
      <td>
        <Button
          color="link"
          rounded={true}
          onClick={() => history.push(`/match/${match.matchId}`)}
        >
          <FaEye />
        </Button>
      </td>
    </tr>
  ))

  return (
    <div className="message is-dark">
      <div className="message-header">
        <p>Match</p>
      </div>
      <div className="message-body">
        <table className="table is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>
                <abbr title="Count">Co</abbr>
              </th>
              <th>
                <abbr title="Match ID">ID</abbr>
              </th>
              <th>Size</th>
              <th>
                <abbr title="Number of agents">Agents</abbr>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>{bodyList}</tbody>
        </table>
      </div>
    </div>
  )
}

export default Table
