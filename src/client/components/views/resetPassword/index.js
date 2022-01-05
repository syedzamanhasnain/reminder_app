import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, connect } from "react-redux";
import { useHistory, NavLink, withRouter } from "react-router-dom";
import { createNewUser, resetSignup } from "./action";

import * as Yup from "yup";

import "./style.scss";

const ResetPassword = ({ isSignupSuccess, isLoading, signupMsg }) => {
  let history = useHistory();
  let dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(resetSignup());
  //     // console.log("signup");
  //   }, []);

  //   useEffect(() => {
  //     if (isSignupSuccess) {
  //       setTimeout(function () {
  //         history.push("/signin");
  //       }, 1000);
  //     }
  //   }, [isSignupSuccess]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required").min(6, "Too Short!"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    }),

    onSubmit: (values) => {
      // console.log(values);
      const signUpData = {
        email: values.email,
        password: values.password,
      };
      console.log(signUpData);
      //  dispatch(createNewUser(signUpData));
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
  signUpReducer: { isSignupSuccess, isLoading, signupMsg } = {},
}) => ({
  isSignupSuccess,
  isLoading,
  signupMsg,
});
export default withRouter(connect(mapStateToProps)(ResetPassword));
