import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
//import { addContact } from "../Contacts/action";
import "./style.scss";

const CreateReminder = () => {
  // let history = useHistory();
  //  let dispatch = useDispatch();
  let [add, setAdd] = useState(false);

  const formik = useFormik({
    initialValues: {
      date: "",
      description: "",
      category: "Other",
      priority: "Low",
      status: false,
    },
    validationSchema: Yup.object({
      date: Yup.date().required("Required"),
      description: Yup.string().required("Required"),
      category: Yup.string(),
      priority: Yup.string(),
      status: Yup.boolean(),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      // console.log(values);
      //   const userData = values;
      //   dispatch(addContact(userData));
      //   setAdd(true);
      //   setTimeout(function () {
      //     history.push("/");
      //   }, 1000);
    },
  });
  return (
    <div className="card mx-auto card-width border-info">
      <div className="card-header">
        <h4>Create Reminder</h4>
      </div>
      <div className="card-body p-5">
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">Date</label>
            <input
              id="date"
              name="date"
              type="date"
              placeholder="date"
              className={
                formik.touched.date && formik.errors.date
                  ? "form-control error"
                  : "form-control"
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.date}
            />
            {formik.touched.date && formik.errors.date ? (
              <div className="text-danger">{formik.errors.date}</div>
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              id="description"
              name="description"
              type="text"
              placeholder="Enter description"
              className={
                formik.touched.description && formik.errors.description
                  ? "form-control error"
                  : "form-control"
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
            />
            {formik.touched.description && formik.errors.description ? (
              <div className="text-danger">{formik.errors.description}</div>
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword4">Category</label>

            <select
              id="category"
              name="category"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.category}
            >
              <option value="Other">Other</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Holiday">Holiday</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword4">Priority</label>
            <select
              className="form-control"
              id="priority"
              name="priority"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.priority}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary btn-block mt-4">
            {add ? "Creating Reminder..." : "Create Reminder"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default CreateReminder;
