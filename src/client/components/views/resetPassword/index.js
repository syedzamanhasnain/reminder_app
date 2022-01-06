import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, connect } from "react-redux";
import { useHistory, NavLink, withRouter, useParams } from "react-router-dom";
import { resetPassword, resetResetPassword } from "./action";

import * as Yup from "yup";

import "./style.scss";

const ResetPassword = ({
  isLoading,
  isResetPasswordSuccess,
  resetPasswordMsg,
}) => {
  let history = useHistory();
  let dispatch = useDispatch();
  let { resettoken } = useParams();

  useEffect(() => {
    dispatch(resetResetPassword());
    // console.log("signup");
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required").min(8, "Too Short!"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    }),

    onSubmit: (values) => {
      const resetPasswordData = {
        email: values.email,
        password: values.password,
        password_confirmation: values.password,
        token: resettoken,
      };
      //alert(JSON.stringify(values, null, 2));
      console.log(resetPasswordData);
      dispatch(resetPassword(resetPasswordData));
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
              <h3 className="text-center mb-4">Reset Password</h3>
              {!isLoading && resetPasswordMsg && (
                <div
                  className={
                    isResetPasswordSuccess
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                >
                  {resetPasswordMsg}
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
                <div className="form-group mb-3">
                  <label htmlFor="password">Confirm Password</label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Enter confirm password"
                    className={
                      formik.touched.confirmPassword &&
                      formik.errors.confirmPassword
                        ? "form-control error"
                        : "form-control"
                    }
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPassword}
                  />
                  {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword ? (
                    <div className="text-danger">
                      {formik.errors.confirmPassword}
                    </div>
                  ) : null}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                  disabled={isLoading}
                >
                  Submit
                </button>
              </form>

              <p className="text-center">
                Already a member?
                <NavLink exact className="ml-2" to="/signin">
                  Sign In
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
  resetPasswordReducer: {
    isLoading,
    resetPasswordMsg,
    isResetPasswordSuccess,
  } = {},
}) => ({
  isLoading,
  isResetPasswordSuccess,
  resetPasswordMsg,
});
export default withRouter(connect(mapStateToProps)(ResetPassword));
