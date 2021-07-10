import React from "react"

const Table = () => {
  return (
    <div class="message is-dark">
      <div class="message-header">
        <p>Match</p>
      </div>
      <div class="message-body">
        <table className="table is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>Id</th>
              <th>Match Id</th>
              <th>Size</th>
              <th>
                <abbr title="Number of agents">NumOfAgents</abbr>
              </th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  )
}

export default Table
