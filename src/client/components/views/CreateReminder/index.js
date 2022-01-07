import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, connect } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";
import { createReminder } from "../Reminder/action";
import "./style.scss";

const CreateReminder = ({ createReminderSuccessMsg }) => {
  let history = useHistory();
  let dispatch = useDispatch();

  useEffect(() => {
    if (createReminderSuccessMsg === "saved successfully.") {
      setTimeout(function () {
        history.push("/reminder");
      }, 1000);
    }
  }, [createReminderSuccessMsg]);

  const formik = useFormik({
    initialValues: {
      date: "",
      description: "",
      category: "1",
      priority: "1",
    },
    validationSchema: Yup.object({
      date: Yup.date().required("Required"),
      description: Yup.string().required("Required"),
      category: Yup.string(),
      priority: Yup.string(),
    }),

    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      console.log(values);
      //  const createReminderData = values;
      const createReminderData = {
        token: localStorage.getItem("token"),
        title_id: values.category,
        description: values.description,
        date: values.date,
        priority_id: values.priority,
      };
      dispatch(createReminder(createReminderData));

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
              <option value="1">Birthday</option>
              <option value="2"> Holiday</option>
              <option value="3">Anniversary</option>
              <option value="4">Festival</option>
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
              <option value="1">Low</option>
              <option value="2">Medium</option>
              <option value="3">High</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary btn-block mt-4">
            Create Reminder
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = ({
  reminderReducer: { createReminderSuccessMsg } = {},
}) => {
  // console.log(state);
  return { createReminderSuccessMsg };
};

export default withRouter(connect(mapStateToProps)(CreateReminder));
