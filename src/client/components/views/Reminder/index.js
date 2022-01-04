import React, { useEffect, useState } from "react";
import { useDispatch, connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useHistory, withRouter } from "react-router-dom";
import { getReminders } from "./action";
import "./style.scss";

//export default function Reminder() {
const Reminder = (props) => {
  let history = useHistory();
  let dispatch = useDispatch();
  let [getAllReminders, setGetAllReminders] = useState([]);
  useEffect(() => {
    dispatch(getReminders());
  }, []);

  useEffect(() => {
    if (props.reminders != 0) {
      setGetAllReminders(props.reminders);
    }
  }, [props.reminders]);

  const createReminderBtn = () => {
    history.push("/reminder/create");
  };

  return (
    <section>
      <div className="container">
        <div className="row mt-5">
          <div className="col-4">
            <div className="card">
              <div className="card-header">Filters</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">All</li>
                <li className="list-group-item">Today</li>
                <li className="list-group-item">Upcomming</li>
              </ul>
            </div>
            <div className="card mt-4">
              <div className="card-header">Status</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">All</li>
                <li className="list-group-item">Incompleted</li>
                <li className="list-group-item">Completed</li>
              </ul>
            </div>
            <div className="card mt-4">
              <div className="card-header">Category</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">All</li>
                <li className="list-group-item">Birthdays</li>
                <li className="list-group-item">Holidays</li>
                <li className="list-group-item">Anniversary</li>
                <li className="list-group-item">Others</li>
              </ul>
            </div>
            <div className="card mt-4">
              <div className="card-header">Priority</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">None</li>
                <li className="list-group-item">High</li>
                <li className="list-group-item">Medium</li>
                <li className="list-group-item">Low</li>
              </ul>
            </div>
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col-7 d-inline-flex">
                <div className="dateLabel">Sort By Date :</div>
                <input type="date" className="form-control dateInput" />
              </div>
              <div className="col-5">
                <button
                  type="button"
                  className="btn btn-primary btn-block"
                  onClick={() => createReminderBtn()}
                >
                  Create Reminder
                </button>
              </div>
            </div>
            <div>
              <div className="row mt-4 py-2">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Date</th>
                      <th scope="col">Category</th>
                      <th scope="col">Description</th>
                      <th>Priority</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getAllReminders.map((reminder, index) => (
                      <tr key={index}>
                        <td>{reminder.date}</td>
                        <td>{reminder.title}</td>
                        <td>{reminder.description}</td>
                        <td>{reminder.priority}</td>
                        <td>{reminder.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const mapStateToProps = ({ reminderReducer: { reminders } = {} }) => {
  // console.log(state);
  return { reminders };
};

const mapDispatchToProps = (dispatch) => ({
  getReminders: bindActionCreators(getReminders, dispatch),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Reminder)
);
