import HTTP from "utils/http.service";

export const createNewUser = (signUpData) => {
  return (dispatch) => {
    dispatch({
      type: "SIGNUP_STARTED",
    });
    return HTTP({
      method: "POST",
      url: "/register",
      data: signUpData,
    })
      .then((res) => {
        if (res.status == 200 && res.data.error) {
          //console.log(res.data.error.email[0]);
          dispatch({
            type: "SIGNUP_FAILURE",
            payload: res.data.error.email[0],
          });
        } else {
          //  console.log(res.data.message);
          dispatch({
            type: "SIGNUP_SUCCESS",
            payload: res.data.message,
          });
        }
      })
      .catch((res) => {
        console.log(res);
      });
  };
};

export const resetSignup = () => {
  return (dispatch) => {
    dispatch({
      type: "SIGNUP_RESET",
    });
  };
};
