import React from "react"
import Header from "./Header"
import SideBar from "./SideBar"
import MainContent from "./Table/index"

const DashBoard = () => {
  return (
    <>
      <Header />
      <aside className="tile is-ancestor">
        <SideBar />
        <MainContent />
      </aside>
    </>
  )
}

export default DashBoard
