import React from "react"
import { Columns, Heading } from "react-bulma-components"
import LoginForm from "./LoginForm"
const PADDING_STYLE = { padding: "4.5rem" }
const HEIGHT_STYLE = {
  fontWeight: "600",
}
const PARAGRAPH_STYLE = {
  fontSize: "1.2rem",
  color: "hsla(0, 0%, 0%, 0.33)",
}

const Intro = () => {
  return (
    <Columns>
      <Columns.Column
        size="6"
        style={{ ...PADDING_STYLE, borderRight: "0.5rem solid white" }}
      >
        <Heading size="2" style={HEIGHT_STYLE}>
          Procon Hutech Website
        </Heading>
        <p style={PARAGRAPH_STYLE}>
          Procon is a competitive game for position on a field divided into
          squares in which each team will try to capture as many tiles as
          possible for the highest score.
          <br />
          <br />
          <a href="/api">More Info...</a>
        </p>
      </Columns.Column>
      <Columns.Column size="6" textAlign="center" style={PADDING_STYLE}>
        <LoginForm />
      </Columns.Column>
    </Columns>
  )
}

export default Intro
