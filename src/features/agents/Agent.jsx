import React from "react"
import { COLORS } from "../../common/constants"
import styles from "../../common/css/ceil.module.css"

const Agent = ({ clicked, data, teamId, onClick }) => {
  const trannsparent = clicked ? "1" : "0.7"

  return (
    <div
      className={styles.ceil + " agent"}
      style={{
        backgroundColor: !teamId
          ? COLORS(trannsparent).RED
          : COLORS(trannsparent).BLUE,
        cursor: !teamId ? "pointer" : "default",
        border: "1px solid #000",
      }}
      onClick={onClick}
    >
      {data}
    </div>
  )
}

export default Agent
