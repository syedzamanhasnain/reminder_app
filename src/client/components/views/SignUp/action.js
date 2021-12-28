import HTTP from "utils/http.service";

export const createNewUser = (signUpData) => {
  return (dispatch) => {
    return HTTP({
      method: "POST",
      url: "/signup",
      data: signUpData,
    })
      .then((res) => {
        if (!!res.data.status) {
          console.log(res.data.message);
          dispatch({
            type: "SIGNUP_SUCCESS",
            payload: res.data.message,
          });
        } else {
          console.log(res.data);
        }
      })
      .catch((res) => {
        //  debugger
        //console.log(res.response);
        console.log(res.response.data.message);
        dispatch({
          type: "SIGNUP_FAILURE",
          payload: res.response.data.message,
        });
      });
  };
};
