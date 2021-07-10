import React from "react"
import { Link } from "react-router-dom"

const Login = () => {
  const divStyle = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }

  return (
    <div style={divStyle}>
      <Link to="/dashboard">
        <button className="button is-danger">Login</button>
      </Link>
    </div>
  )
}

export default Login
