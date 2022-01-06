import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "../../views/SignIn/action";
import "./style.scss";

function Header({ isLogin }) {
  let dispatch = useDispatch();
  let history = useHistory();
  const signOutBtn = () => {
    dispatch(signOut());

    history.push("/signin");
  };

  const signInBtn = () => {
    history.push("/signin");
  };

  return (
    <section>
      <nav className="navbar navbar-darks">
        <div className="container">
          <div className="navbar-brand" href="#">
            <img
              alt="StudioGraphene"
              src="/images/logo.png"
              srcSet="/images/logo@2x.png 2x"
            />
          </div>
          {isLogin ? (
            <ul className="navbar-nav flex-row flex-wrap ms-md-auto">
              <li className="nav-item col-6 col-md-auto">
                <button
                  type="button"
                  onClick={() => signOutBtn()}
                  className="btn btn-outline-light"
                >
                  Sign Out
                </button>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav flex-row flex-wrap ms-md-auto">
              <li className="nav-item col-6 col-md-auto">
                <button
                  type="button"
                  onClick={() => signInBtn()}
                  className="btn btn-outline-light"
                >
                  Sign In
                </button>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </section>
  );
}

export default Header;
