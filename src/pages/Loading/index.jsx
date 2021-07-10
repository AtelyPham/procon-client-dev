import React from "react"

const Loading = () => {
  return (
    <div className="fullHeight">
      <div className="container">
        <progress className="progress is-large is-primary" max="100">
          50%
        </progress>
      </div>
    </div>
  )
}

export default Loading
