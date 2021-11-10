import React from "react"
import { useSelector } from "react-redux"
import { Redirect, Route } from "react-router"
import { stateStatus } from "../../config"

const PrivateRoute = ({ ...rest }) => {
  const auth = useSelector(state => state.auth)

  return auth.status === stateStatus.successed ? (
    <Route {...rest} />
  ) : (
    <Redirect to="/login" />
  )
}

export default PrivateRoute
