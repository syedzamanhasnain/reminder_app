import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, connect } from "react-redux";
import { signInUser } from "./action";
import { NavLink, withRouter, useHistory } from "react-router-dom";
import * as Yup from "yup";

import "./style.scss";

const SignIn = ({ isSigninSuccess, isLoading, signinMsg, jwtToken }) => {
  let history = useHistory();
  let dispatch = useDispatch();

  useEffect(() => {
    if (isSigninSuccess) {
      setTimeout(function () {
        history.push("/reminder");
      }, 1000);
    }
  }, [isSigninSuccess]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      // console.log(values);
      const signInData = {
        email: values.email,
        password: values.password,
      };
      // console.log(signInData);
      dispatch(signInUser(signInData));
    },
  });
  return (
    <section>
      <div className="container">
        <div className="sign_up">
          <div className="card">
            <div className="card-body p-5">
              <div className="text-center">
                <img
                  alt="StudioGraphene"
                  src="/images/logo.png"
                  srcSet="/images/logo@2x.png 2x"
                  className="circle"
                />
              </div>
              <h3 className="text-center mb-4">Sign In</h3>
              {!isLoading && signinMsg && (
                <div className="alert alert-danger">{signinMsg}</div>
              )}
              <form onSubmit={formik.handleSubmit}>
                <div className="form-group mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    className={
                      formik.touched.email && formik.errors.email
                        ? "form-control error"
                        : "form-control"
                    }
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-danger"> {formik.errors.email}</div>
                  ) : null}
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    className={
                      formik.touched.password && formik.errors.password
                        ? "form-control error"
                        : "form-control"
                    }
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="text-danger">{formik.errors.password}</div>
                  ) : null}
                </div>
                <div className="form-check mb-3">
                  <input
                    name="rememberMe"
                    className="form-check-input mb-3 checkbox"
                    type="checkbox"
                    id="rememberMe"
                  />
                  <label className="form-check-label" htmlFor="rememberMe">
                    Remember me
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                >
                  Sign In
                </button>
              </form>
              <p className="text-center">
                Don't have an account?
                <NavLink exact className="ml-2" to="/signup">
                  Sign Up
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = ({
  signInReducer: { isSigninSuccess, isLoading, signinMsg, jwtToken } = {},
}) => ({
  isSigninSuccess,
  isLoading,
  signinMsg,
  jwtToken,
});
export default withRouter(connect(mapStateToProps)(SignIn));
