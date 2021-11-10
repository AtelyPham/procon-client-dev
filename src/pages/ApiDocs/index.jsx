import React from "react"
import Menu from "./Menu"

const ApiDocs = () => {
  return (
    <div className="columns">
      <div
        className="column is-2 is-fullheight hero is-hidden-touch"
        style={{
          backgroundColor: "rgba(239, 107, 107, 0.5)",
        }}
      >
        <h1 className="title is-3">Menu</h1>
      </div>
      <div
        className="column is-7 hero is-fullheight"
        style={{
          backgroundColor: "rgba(89, 245, 89, 0.5)",
        }}
      >
        API DOCS
      </div>
      <div
        className="column hero is-fullheight is-hidden-mobile"
        style={{
          backgroundColor: "rgba(53, 53, 218, 0.5)",
        }}
      >
        Output
      </div>
    </div>
  )
}

export default ApiDocs
