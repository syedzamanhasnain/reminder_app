import HTTP from "utils/http.service";

export const getContacts = () => {
  return (dispatch) => {
    return HTTP({
      method: "GET",
      url: "/contacts",
    }).then((res) => {
      dispatch({
        type: "GET_CONTACT_DATA",
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
    }).then(() => {
      dispatch({
        type: "CREATE_REMINDER",
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

export const deleteContact = (id) => {
  return (dispatch) => {
    return HTTP({
      method: "DELETE",
      url: `/contacts/${id}`,
    }).then((res) => {
      dispatch({
        type: "DELETE_CONTACT_DATA",
        payload: res.data,
      });
    });
  };
};
