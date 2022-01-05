import HTTP from "utils/http.service";

export const createPasswordLink = (forgotPasswordData) => {
  return (dispatch) => {
    dispatch({
      type: "FORGOT_PASSWORD_STARTED",
    });
    return HTTP({
      method: "POST",
      url: "/register",
      data: forgotPasswordData,
    })
      .then((res) => {
        if (res.status == 200 && res.data.error) {
          //console.log(res.data.error.email[0]);
          dispatch({
            type: "FORGOT_PASSWORD_FAILURE",
            payload: res.data.error.email[0],
          });
        } else {
          //  console.log(res.data.message);
          dispatch({
            type: "FORGOT_PASSWORD_SUCCESS",
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
