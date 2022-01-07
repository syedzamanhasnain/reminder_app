import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useHistory, withRouter } from "react-router-dom";
import {
  getReminders,
  deleteReminderById,
  deleteCompletedReminder,
  deleteReminderByDate,
} from "./action";
import "./style.scss";

const sortAndfilter = (data) => {
  const all = {};
  if (data.length === 0) {
    return {};
  }
  data
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map((el) => {
      if (all[el.date]) {
        all[el.date].push(el);
      } else {
        all[el.date] = [el];
      }
    });
  return all;
};

const TableBody = ({
  data,
  editReminder,
  deleteReminder,
  deleteReminderByDateBtn,
}) => {
  const sortByDate = sortAndfilter(data);
  const datekeys = Object.keys(sortByDate);
  return datekeys.map((el, index) => (
    <Fragment key={index}>
      <div className="card dateCard mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <div>Date : {el}</div>
          <button
            type="button"
            className="btn btn-outline-light btn-sm mr-4"
            onClick={() => deleteReminderByDateBtn(el)}
          >
            Delete Reminder for date : {el}
          </button>
        </div>
      </div>
      <div className="card reminderCard">
        <table className="table table-hover mb-0">
          <thead>
            <tr>
              <th>Category</th>
              <th>Description</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sortByDate[el].map((re, index2) => (
              <tr key={`${index}${index2}`}>
                <td>{re.title || "-"}</td>
                <td>{re.description || "-"}</td>
                <td>{re.priority || "-"}</td>
                <td>{re.status || "-"}</td>
                <td>
                  <i
                    className="fa fa-pencil-square-o mr-3 deleteReminderBtn"
                    onClick={() => editReminder(re.id)}
                  ></i>
                  <i
                    className="fa fa-trash-o trashIcon deleteReminderBtn"
                    onClick={() => deleteReminder(re.id)}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  ));
};

const Reminder = (props) => {
  let history = useHistory();
  let dispatch = useDispatch();
  let [getAllReminders, setGetAllReminders] = useState([]);
  let [getRemindersByDate, setGetRemindersByDate] = useState([]);
  let [getRemindersByStatus, setGetRemindersByStatus] = useState([]);
  let [statusFilter, setStatusFilter] = useState("");

  useEffect(() => {
    dispatch(getReminders());
  }, [
    props.deleteCompletedSuccessMsg,
    props.deleteByIdSuccessMsg,
    props.deleteReminderByDateSuccessMsg,
  ]);

  useEffect(() => {
    if (props.reminders != 0) {
      setGetAllReminders(props.reminders);
      setGetRemindersByDate(props.reminders);
      setGetRemindersByStatus(props.reminders);
    }
  }, [
    props.reminders,
    props.deleteByIdSuccessMsg,
    props.deleteCompletedSuccessMsg,
    props.deleteReminderByDateSuccessMsg,
  ]);

  useEffect(() => {
    const resultByStatus = getRemindersByDate.filter(
      (data) => data.status === statusFilter
    );
    console.log(resultByStatus);
    setGetRemindersByStatus(resultByStatus);
  }, [statusFilter, getRemindersByDate]);

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
  const deleteReminderByDateBtn = (reminderDate) => {
    const deleteReminderByDateData = {
      token: localStorage.getItem("token"),
      from: reminderDate,
      to: reminderDate,
    };

    dispatch(deleteReminderByDate(deleteReminderByDateData));

    //  console.log(deleteReminderByDateData);
  };

  const deleteCompletedReminderBtn = () => {
    const deleteCompletedReminderData = {
      token: localStorage.getItem("token"),
    };
    dispatch(deleteCompletedReminder(deleteCompletedReminderData));

    //  console.log(id);
  };

  const editReminder = (reminderEditId) => {
    history.push(`reminder/edit/${reminderEditId}`);
  };

  const getAllBtn = () => {
    console.log("all");
    setStatusFilter("");
  };
  const getCompletedBtn = () => {
    console.log("comp");
    setStatusFilter("open");
  };
  const getIncompletedBtn = () => {
    console.log("incomp");
    setStatusFilter("close");
  };
  //remider filter start
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

  //reminder filter end

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
                  onClick={() => deleteCompletedReminderBtn()}
                >
                  Delete All Completed
                </button>
              </div>
            </div>
            <div>
              <div className="row mt-4 py-2">
                <div className="btn-group btn-block mx-3">
                  <button
                    type="button"
                    //className="btn btn-outline-primary btnTab"
                    className={
                      statusFilter == ""
                        ? "btn btn-primary btnTab"
                        : "btn btn-outline-primary btnTab"
                    }
                    onClick={() => getAllBtn()}
                  >
                    All
                  </button>
                  <button
                    type="button"
                    //  className="btn btn-outline-primary btnTab"
                    className={
                      statusFilter == "open"
                        ? "btn btn-primary btnTab"
                        : "btn btn-outline-primary btnTab"
                    }
                    onClick={() => getCompletedBtn()}
                  >
                    Completed
                  </button>
                  <button
                    type="button"
                    //   className="btn btn-outline-primary btnTab"
                    className={
                      statusFilter == "close"
                        ? "btn btn-primary btnTab"
                        : "btn btn-outline-primary btnTab"
                    }
                    onClick={() => getIncompletedBtn()}
                  >
                    Incompleted
                  </button>
                </div>
                <div className="reminderCard mx-3">
                  {statusFilter === "" ? (
                    <div>
                      <TableBody
                        data={getRemindersByDate}
                        deleteReminderByDateBtn={deleteReminderByDateBtn}
                        editReminder={editReminder}
                        deleteReminder={deleteReminder}
                      />
                    </div>
                  ) : (
                    <div>
                      <TableBody
                        data={getRemindersByStatus}
                        editReminder={editReminder}
                        deleteReminder={deleteReminder}
                      />
                    </div>
                  )}
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
  reminderReducer: {
    reminders,
    deleteByIdSuccessMsg,
    deleteCompletedSuccessMsg,
    deleteReminderByDateSuccessMsg,
  } = {},
}) => {
  return {
    reminders,
    deleteByIdSuccessMsg,
    deleteCompletedSuccessMsg,
    deleteReminderByDateSuccessMsg,
  };
};

const mapDispatchToProps = (dispatch) => ({
  deleteReminderByDate: bindActionCreators(deleteReminderByDate, dispatch),
  deleteReminderById: bindActionCreators(deleteReminderById, dispatch),
  deleteCompletedReminder: bindActionCreators(
    deleteCompletedReminder,
    dispatch
  ),
  getReminders: bindActionCreators(getReminders, dispatch),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Reminder)
);
