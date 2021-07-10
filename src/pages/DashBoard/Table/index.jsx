import React from "react"
import Buttons from "./Buttons"
import Table from "./Table"

const MainContent = () => {
  return (
    <div className="tile is-vertical is-parent mr-4">
      <h1 className="title mt-3">DashBoard</h1>
      <Buttons />
      <Table />
    </div>
  )
}

export default MainContent
