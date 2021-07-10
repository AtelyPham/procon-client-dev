import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import "bulma/css/bulma-rtl.min.css"
import "bulma/css/bulma.min.css"
import App from "./App"
import { store } from "./app/store"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import Loading from "./pages/Loading"

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback={<Loading />}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById("root")
)
