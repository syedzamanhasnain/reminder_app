import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useHistory, withRouter, useParams } from "react-router-dom";
import { getReminderById, editReminder } from "../Reminder/action";
import "./style.scss";

const EditReminder = ({ editReminderSuccessMsg, reminderById }) => {
  const history = useHistory();
  let { editId } = useParams();
  let dispatch = useDispatch();
  const [initialValue, setInitialValue] = useState({
    date: "",
    description: "",
    category: "",
    priority: "",
    status: "",
  });

  const editReminderData = {
    id: editId,
  };
  useEffect(() => {
    dispatch(getReminderById(editReminderData));
  }, []);

  useEffect(() => {
    if (reminderById) {
      setInitialValue({
        date: reminderById.date,
        description: reminderById.description,
        category: reminderById.title_id,
        priority: reminderById.priority_id,
        status: reminderById.status_id,
      });
    }
  }, [reminderById]);

  useEffect(() => {
    if (editReminderSuccessMsg === "update successfully.") {
      setTimeout(function () {
        history.push("/reminder");
      }, 1000);
    }
  }, [editReminderSuccessMsg]);

  const formik = useFormik({
    initialValues: initialValue,
    enableReinitialize: true,
    validationSchema: Yup.object({
      date: Yup.date().required("Required"),
      description: Yup.string().required("Required"),
      category: Yup.string(),
      priority: Yup.string(),
      status: Yup.string(),
    }),

    onSubmit: (values) => {
      //  alert(JSON.stringify(values, null, 2));

      const editReminderData = {
        id: editId,
        token: localStorage.getItem("token"),
        title_id: values.category,
        description: values.description,
        date: values.date,
        priority_id: values.priority,
        status_id: values.status,
      };
      dispatch(editReminder(editReminderData));
    },
  });
  return (
    <div className="card mx-auto card-width border-info">
      <div className="card-header">
        <h4>Edit Reminder</h4>
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
            <label htmlFor="category">Category</label>

            <select
              id="category"
              name="category"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.category}
            >
              <option value="1">Birthday</option>
              <option value="2">Anniversary</option>
              <option value="3">Holiday</option>
              <option value="4">Festival</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="priority">Priority</label>
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
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              className="form-control"
              id="status"
              name="status"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.status}
            >
              <option value="1">Complete</option>
              <option value="2">Incomplete</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary btn-block mt-4">
            Edit Reminder
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = ({
  reminderReducer: { reminderById, editReminderSuccessMsg } = {},
}) => {
  return { reminderById, editReminderSuccessMsg };
};
const mapDispatchToProps = (dispatch) => ({
  getReminderById: bindActionCreators(getReminderById, dispatch),
  editReminder: bindActionCreators(editReminder, dispatch),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EditReminder)
);
