import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, connect } from "react-redux";
import { createPasswordLink, resetForgotPassword } from "./action";
import { NavLink, withRouter, useHistory } from "react-router-dom";
import * as Yup from "yup";

import "./style.scss";

const ForgotPassword = ({
  isForgotPasswordSuccess,
  isLoading,
  forgotPasswordMsg,
}) => {
  let history = useHistory();
  let dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      const forgotPasswordData = {
        email: values.email,
      };
      console.log(forgotPasswordData);
      dispatch(createPasswordLink(forgotPasswordData));
    },
  });
  useEffect(() => {
    dispatch(resetForgotPassword());
    // console.log("signup");
  }, []);
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
              <h3 className="text-center mb-4">Forgot Password {isLoading}</h3>
              {!isLoading && forgotPasswordMsg && (
                <div
                  className={
                    isForgotPasswordSuccess
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                >
                  {forgotPasswordMsg}
                </div>
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

                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4 abx"
                  disabled={isLoading}
                >
                  Submit
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
  forgotPasswordReducer: {
    isForgotPasswordSuccess,
    isLoading,
    forgotPasswordMsg,
  } = {},
}) => ({
  isForgotPasswordSuccess,
  isLoading,
  forgotPasswordMsg,
});
export default withRouter(connect(mapStateToProps)(ForgotPassword));
