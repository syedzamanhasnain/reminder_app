import HTTP from "utils/http.service";

export const resetPassword = (resetPasswordData) => {
  return (dispatch) => {
    dispatch({
      type: "RESET_PASSWORD_STARTED",
    });
    return HTTP({
      method: "POST",
      url: "/reset_password",
      data: resetPasswordData,
    })
      .then((res) => {
        if (res.status == 200) {
          console.log(res);
          debugger;
          dispatch({
            type: "RESET_PASSWORD_SUCCESS",
            payload: res.data.message,
          });
        } else {
          debugger;
          dispatch({
            type: "RESET_PASSWORD_FAILURE",
            payload: res.data.message,
          });
        }
      })
      .catch((res) => {
        debugger;
        if (res.response.status == 500) {
          console.log(res.response.data);
          dispatch({
            type: "RESET_PASSWORD_FAILURE",
            payload: res.response.data.message,
          });
        } else {
          console.log(res);
        }
      });
  };
};

export const resetResetPassword = () => {
  return (dispatch) => {
    dispatch({
      type: "RESET_PASSWORD_RESET",
    });
  };
};
