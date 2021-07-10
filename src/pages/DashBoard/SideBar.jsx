import React from "react"

const SideBar = () => {
  return (
    <div
      className="tile is-parent is-3"
      style={{
        height: "calc(100vh - 3.5rem)",
      }}
    >
      <article className="tile is-child notification is-success">
        <div className="content">
          <p className="title">Tall tile</p>
          <p className="subtitle">With even more content</p>
          <div className="content"></div>
        </div>
      </article>
    </div>
  )
}

export default SideBar
