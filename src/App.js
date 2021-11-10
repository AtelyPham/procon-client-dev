import "bulma/css/bulma.min.css"
import React from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Header from "./common/components/Header"
import PrivateRoute from "./common/components/PrivateRoute"
import NotFound from "./pages/NotFound"
import Login from "./pages/Login"

const DashBoard = React.lazy(() => import("./pages/DashBoard"))
const Match = React.lazy(() => import("./pages/Match"))

function App() {
  return (
    <>
      <div className="container is-fuild">
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route path="/login" component={Login} />
          <Route
            path="/api"
            render={() => (
              <>
                <Header />
                <h1 className="title">API DOCs Page</h1>
              </>
            )}
          />
          <PrivateRoute
            path="/dashboard"
            render={() => (
              <>
                <Header />
                <DashBoard />
              </>
            )}
          />
          <PrivateRoute
            path="/match/:matchId"
            render={() => (
              <>
                <Header />
                <Match />
              </>
            )}
          />
          <Route
            path="*"
            render={() => (
              <>
                <Header />
                <NotFound />
              </>
            )}
          />
        </Switch>
      </div>
      <ToastContainer />
    </>
  )
}

export default App
