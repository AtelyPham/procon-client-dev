import React from "react"
import styles from "../../common/css/ceil.module.css"

const Ceil = ({ col, row, data, innerStyle, onMouseLeave, onClick }) => {
  return (
    <div
      style={innerStyle}
      className={styles.ceil}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {data}
    </div>
  )
}

export default Ceil
