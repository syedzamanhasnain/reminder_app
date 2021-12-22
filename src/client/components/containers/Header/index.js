import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

function Header() {
  return (
    <section>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <div className="navbar-brand" href="#">
            <img
              alt="StudioGraphene"
              src="/images/logo.png"
              srcSet="/images/logo@2x.png 2x"
            />
          </div>
          <ul className="navbar-nav flex-row flex-wrap ms-md-auto">
            <li className="nav-item col-6 col-md-auto">
              <NavLink exact className="link" activeClassName="active" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item col-6 col-md-auto">
              <NavLink
                exact
                className="link"
                activeClassName="active"
                to="/signup"
              >
                Sign Up
              </NavLink>
            </li>
            <li className="nav-item col-6 col-md-auto">
              <NavLink
                exact
                className="link"
                activeClassName="active"
                to="/signin"
              >
                Sign In
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}

export default Header;
