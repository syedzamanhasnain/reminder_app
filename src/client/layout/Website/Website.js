import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import appRoutes from "../../Routes";
import {
  APPROVED_ROUTES,
  UNAPPROVED_ROUTES,
} from "./../../utils/verify_routes";
import Footer from "containers/Footer";
import Header from "containers/Header";
import { changeloaderstatus } from "./Website.action";

const WebsiteLayout = ({
  location: { pathname },
  history,
  isSigninSuccess,
}) => {
  const [loginState, setLoginState] = useState(false);

  useEffect(() => {
    const isLogin = localStorage.getItem("loginState");
    setLoginState(isLogin === "true");
    if (
      !UNAPPROVED_ROUTES.includes(pathname) &&
      APPROVED_ROUTES.includes(pathname) &&
      isLogin === null
    ) {
      history.push("/signin");
    }
  }, []);

  useEffect(() => {
    const isLogin = localStorage.getItem("loginState");
    setLoginState(isLogin === "true");
  }, [isSigninSuccess]);

  return (
    <div className="site-wrapper">
      <Header isLogin={isSigninSuccess || loginState} />
      {renderRoutes(appRoutes[0].routes)}
      {/* <Footer /> */}
    </div>
  );
};

const mapStateToProps = ({ signInReducer: { isSigninSuccess } = {} }) => ({
  isSigninSuccess,
});

const mapDispatchToProps = (dispatch) => ({
  changeloaderstatus: bindActionCreators(changeloaderstatus, dispatch),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(WebsiteLayout)
);
