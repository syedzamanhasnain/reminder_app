import React from 'react'
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
//import { createNewUser } from "./action";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";

import "./style.scss";

export default function ForgotPassword() {
    let history = useHistory();
    let dispatch = useDispatch();
    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
        termsAndCondition: false,
      },
      validationSchema: Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string().required("Required"),
        termsAndCondition: Yup.boolean().oneOf([true], "You must accept the terms and conditions"),
      }),
      onSubmit: (values) => {
        console.log(values);
         const signUpData = {
          email:values.email,
          password:values.password
        };
         console.log(signUpData);
     //   dispatch(createNewUser(signUpData));
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
                <h3 className="text-center mb-4">Forgot Password</h3>
  
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
                    <label htmlFor="password">New Password</label>
                    <input
                      id="newPassword"
                      name="newPassword"
                      type="password"
                      placeholder="Enter new password"
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
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4"
                  >
                    Change Password 
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
}
