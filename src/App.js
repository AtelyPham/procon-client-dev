import React from "react"
import "./App.css"
import Login from "./pages/Login"
import { Switch, Route } from "react-router-dom"
const Game = React.lazy(() => import("./pages/Game"))
const DashBoard = React.lazy(() => import("./pages/DashBoard"))

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/dashboard" component={DashBoard} />
      <Route path="/match" component={Game} />
    </Switch>
  )
}

export default App
