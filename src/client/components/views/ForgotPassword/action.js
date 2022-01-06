import HTTP from "utils/http.service";

export const createPasswordLink = (forgotPasswordData) => {
  return (dispatch) => {
    dispatch({
      type: "FORGOT_PASSWORD_STARTED",
    });
    return HTTP({
      method: "POST",
      url: "/reset_password_link",
      data: forgotPasswordData,
    })
      .then((res) => {
        if (res.data.status) {
          console.log(res);
          dispatch({
            type: "FORGOT_PASSWORD_SUCCESS",
            payload: res.data.status,
          });
        } else {
          dispatch({
            type: "FORGOT_PASSWORD_FAILURE",
            payload: res.data.message,
          });
        }
      })
      .catch((res) => {
        console.log(res);
      });
  };
};

export const resetForgotPassword = () => {
  return (dispatch) => {
    dispatch({
      type: "FORGOT_PASSWORD_RESET",
    });
  };
};
