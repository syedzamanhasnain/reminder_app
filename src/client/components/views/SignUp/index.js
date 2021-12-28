import React from "react";
import { useFormik } from "formik";
import { useDispatch, connect} from "react-redux";
import { useHistory, NavLink, withRouter } from "react-router-dom";
import { createNewUser } from "./action";

import * as Yup from "yup";

import "./style.scss";

const SignUp = (props) => {
  // const { errMsg } = props;
  let history = useHistory();
  let dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      termsAndCondition: false,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
      termsAndCondition: Yup.boolean().oneOf(
        [true],
        "You must accept the terms and conditions"
      ),
    }),

    onSubmit: (values) => {
      console.log(values);
      const signUpData = {
        email: values.email,
        Name: values.name,
        password: values.password,
      };
      // console.log(signUpData);
      dispatch(createNewUser(signUpData));
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
              <h3 className="text-center mb-4">Sign Up</h3>

              <form onSubmit={formik.handleSubmit}>
                <div className="form-group mb-3">
                  <label htmlFor="firstName">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter Name"
                    className={
                      formik.touched.name && formik.errors.name
                        ? "form-control error"
                        : "form-control"
                    }
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div className="text-danger">{formik.errors.name}</div>
                  ) : null}
                </div>
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
                <div className="form-check mb-3">
                  <input
                    name="termsAndCondition"
                    className="form-check-input mb-3 checkbox"
                    type="checkbox"
                    value={formik.values.termsAndCondition}
                    onChange={formik.handleChange}
                    id="termsAndCondition"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="termsAndCondition"
                  >
                    I agree to all terms & conditions
                  </label>
                  {formik.touched.termsAndCondition &&
                  formik.errors.termsAndCondition ? (
                    <div className="text-danger termsAndCondtionErrMessage">
                      {formik.errors.termsAndCondition}
                    </div>
                  ) : null}
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                >
                  Sign Up
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


const mapStateToProps = (state) => {
  // console.log(state.signUpReducer);
  return {
    signupMessage: state.signUpReducer.signupMessage,
  };
};
export default withRouter(connect(mapStateToProps)(SignUp));
