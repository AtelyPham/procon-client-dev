import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { stateStatus } from "../../config"
import { logout } from "../../features/auth/authSlice"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch(logout())
  }

  return (
    <nav
      className="navbar has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
              alt="No pic"
            />
          </Link>

          <button
            className={`navbar-burger ${isOpen ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div className={`navbar-menu ${isOpen ? "is-active" : ""}`}>
          <div className="navbar-start">
            <Link
              className="navbar-item"
              to="/dashboard"
              onClick={() => setIsOpen(!isOpen)}
            >
              DashBoard
            </Link>
            <Link
              className="navbar-item"
              to="/api"
              onClick={() => setIsOpen(!isOpen)}
            >
              Documentation
            </Link>
          </div>
          {auth.status === stateStatus.successed && (
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-primary">
                    <strong>Sign up</strong>
                  </a>
                  <a className="button is-light" onClick={onLogout}>
                    Log out
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Header
