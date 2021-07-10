import React from "react"
import { FaRegEnvelope, FaRegBell } from "react-icons/fa"

const Header = () => {
  return (
    <header className="hero">
      <div className="hero-head">
        <nav
          className="navbar has-shadow"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="navbar-item is--brand">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                width="112"
                height="28"
                alt="Brand Logo"
              />
            </a>
            <button className="button navbar-burger" data-target="navMenu">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </button>
          </div>
          <div className="navbar-menu navbar-end" id="navMenu">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="navbar-item nav-tag">
              <button className="button">
                <FaRegEnvelope />{" "}
              </button>
            </a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="navbar-item nav-tag">
              <button className="button">
                <FaRegBell />{" "}
              </button>
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className="navbar-link">
                <figure
                  className="image is-32x32"
                  style={{ marginRight: "0.5em" }}
                >
                  <img
                    src="https://avatars1.githubusercontent.com/u/7221389?v=4&amp;s=32"
                    alt="icon"
                  />
                </figure>
                mazipan
              </a>
              <div className="navbar-dropdown is-right">
                <a
                  className="navbar-item"
                  href="https://mazipan.space/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon is-small">
                    <i className="fa fa-user-o"></i>{" "}
                  </span>
                  &nbsp; Profile
                </a>
                <hr className="navbar-divider" />
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="navbar-item">
                  <span className="icon is-small">
                    <i className="fa fa-power-off"></i>{" "}
                  </span>
                  &nbsp; Logout
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
