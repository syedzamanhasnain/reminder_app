import HTTP from "utils/http.service";

export const getReminders = () => {
  return (dispatch) => {
    return HTTP({
      method: "GET",
      url: "/get_reminder",
      params: { token: localStorage.getItem("token") },
    }).then((res) => {
      dispatch({
        type: "GET_REMINDERS",
        payload: res.data,
      });
    });
  };
};

export const getReminderById = (editReminderData) => {
  return (dispatch) => {
    return HTTP({
      method: "GET",
      url: `/view_reminder_by_id/${editReminderData.id}`,
      params: { token: localStorage.getItem("token"), id: editReminderData.id },
    }).then((res) => {
      dispatch({
        type: "GET_REMINDER_BY_ID",
        payload: res.data,
      });
    });
  };
};

export const createReminder = (createReminderData) => {
  return (dispatch) => {
    return HTTP({
      method: "POST",
      url: "/create_reminder",
      data: createReminderData,
    }).then((res) => {
      //debugger;
      dispatch({
        type: "CREATE_REMINDER",
        payload: res.data.success,
      });
    });
  };
};

export const editReminder = (editReminderData) => {
  return (dispatch) => {
    return HTTP({
      method: "PUT",
      url: `/update_reminder`,
      data: editReminderData,
    }).then((res) => {
      dispatch({
        type: "EDIT_REMINDER_BY_ID",
        payload: res.data.success,
      });
    });
  };
};

export const deleteReminderById = (deleteReminderData) => {
  return (dispatch) => {
    return HTTP({
      method: "DELETE",
      url: `/delete_reminder/${deleteReminderData.id}`,
      params: deleteReminderData,
    }).then((res) => {
      dispatch({
        type: "DELETE_REMINDER_BY_ID",
        payload: res.data.success,
      });
    });
  };
};
