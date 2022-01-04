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

export const getContact = (id) => {
  return (dispatch) => {
    return HTTP({
      method: "GET",
      url: `/contacts/${id}`,
    }).then((res) => {
      dispatch({
        type: "GET_SINGLE_CONTACT_DATA",
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

export const editContact = (userData) => {
  return (dispatch) => {
    return HTTP({
      method: "PUT",
      url: `/contacts/${Number(userData.id)}`,
      data: userData,
    }).then(() => {
      dispatch({
        type: "EDIT_CONTACT_DATA",
        payload: userData,
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
        payload: res.data,
      });
    });
  };
};
