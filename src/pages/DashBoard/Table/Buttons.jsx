import React from "react"
import { BiRefresh } from "react-icons/bi"
import { FaPlusCircle, FaTrashAlt } from "react-icons/fa"

const Buttons = () => {
  return (
    <div className="buttons is-justify-content-flex-end">
      <button className="button is-info">
        <span className="icon">
          <BiRefresh />
        </span>
        <span>Refresh</span>
      </button>
      <button className="button is-success">
        <span className="icon">
          <FaPlusCircle />
        </span>
        <span>New</span>
      </button>
      <button className="button is-danger">
        <span className="icon">
          <FaTrashAlt />
        </span>
        <span>Delete</span>
      </button>
    </div>
  )
}

export default Buttons
