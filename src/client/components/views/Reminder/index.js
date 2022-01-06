import React, { useEffect, useState } from "react";
import { useDispatch, connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useHistory, withRouter } from "react-router-dom";
import { getReminders, deleteReminderById } from "./action";
import "./style.scss";

const Reminder = (props) => {
  let history = useHistory();
  let dispatch = useDispatch();
  let [getAllReminders, setGetAllReminders] = useState([]);
  let [getRemindersByDate, setGetRemindersByDate] = useState([]);

  useEffect(() => {
    dispatch(getReminders());
  }, [props.deleteByIdSuccessMsg]);

  useEffect(() => {
    if (props.reminders != 0) {
      setGetAllReminders(props.reminders);
      setGetRemindersByDate(props.reminders);
    }
  }, [props.reminders, props.deleteByIdSuccessMsg]);

  const createReminderBtn = () => {
    history.push("/reminder/create");
  };
  const deleteReminder = (reminderId) => {
    const deleteReminderData = {
      token: localStorage.getItem("token"),
      id: reminderId,
    };
    dispatch(deleteReminderById(deleteReminderData));

    //  console.log(id);
  };
  const editReminder = (reminderEditId) => {
    history.push(`reminder/edit/${reminderEditId}`);
  };
  const sortByDate = (e) => {
    console.log(e.target.value);

    if (e.target.value == "") {
      console.log(e.target.value);
      setGetRemindersByDate(getAllReminders);
    } else {
      const result = getAllReminders.filter(
        (data) => data.date === e.target.value
      );
      setGetRemindersByDate(result);
    }
  };

  return (
    <section>
      <div className="container">
        <div className="row mt-5">
          <div className="col-12">
            <div className="row">
              <div className="col-5 d-inline-flex">
                <div className="dateLabel">Sort By Date :</div>
                <input
                  type="date"
                  className="form-control dateInput"
                  onChange={(e) => sortByDate(e)}
                />
              </div>
              <div className="col-3">
                <button
                  type="button"
                  className="btn btn-primary btn-block"
                  onClick={() => createReminderBtn()}
                >
                  Create Reminder
                </button>
              </div>

              <div className="col-4">
                <button
                  type="button"
                  className="btn btn-primary btn-block"
                  onClick={() => createReminderBtn()}
                >
                  Delete All Completed
                </button>
              </div>
            </div>
            <div>
              <div className="row mt-4 py-2">
                <div className="btn-group btn-block mx-3">
                  <button type="button" className="btn btn-primary btnTab">
                    All
                  </button>
                  <button type="button" className="btn btn-primary btnTab">
                    Completed
                  </button>
                  <button type="button" className="btn btn-primary btnTab">
                    Incompleted
                  </button>
                </div>
                <div className="card reminderCard mx-3">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {getRemindersByDate.map((reminder, index) => (
                        <tr key={index}>
                          <td>{reminder.date || "-"}</td>
                          <td>{reminder.title || "-"}</td>
                          <td>{reminder.description || "-"}</td>
                          <td>{reminder.priority || "-"}</td>
                          <td>{reminder.status || "-"}</td>
                          <td>
                            <i
                              className="fa fa-pencil-square-o mr-3 deleteReminderBtn"
                              onClick={() => editReminder(reminder.id)}
                            ></i>
                            <i
                              className="fa fa-trash-o trashIcon deleteReminderBtn"
                              onClick={() => deleteReminder(reminder.id)}
                            ></i>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const mapStateToProps = ({
  reminderReducer: { reminders, deleteByIdSuccessMsg } = {},
}) => {
  return { reminders, deleteByIdSuccessMsg };
};

const mapDispatchToProps = (dispatch) => ({
  deleteReminderById: bindActionCreators(deleteReminderById, dispatch),
  getReminders: bindActionCreators(getReminders, dispatch),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Reminder)
);
