import React from "react"
import { Columns, Hero } from "react-bulma-components"
import Intro from "./Intro"
import Footer from "./Footer"

const COLUMN_STYLE = {
  marginTop: "10rem",
  background: "rgb(247, 247, 247)",
  borderRadius: "10px",
}
const WIDE_SCREEN_SETUP = {
  size: "8",
  offset: "2",
}

const Login = () => {
  return (
    <Hero size="fullheight">
      <Columns multiline="true" flexDirection="column">
        <Columns.Column widescreen={WIDE_SCREEN_SETUP} style={COLUMN_STYLE}>
          <Intro />
        </Columns.Column>
        <Columns.Column widescreen={WIDE_SCREEN_SETUP}>
          <br />
          <Footer />
        </Columns.Column>
      </Columns>
    </Hero>
  )
}

export default Login
