import HTTP from "utils/http.service";

export const signInUser = (signInData) => {
  return (dispatch) => {
    dispatch({
      type: "SIGNIN_STARTED",
    });
    return HTTP({
      method: "POST",
      url: "/login",
      data: signInData,
    })
      .then((res) => {
        if (res.status == 200 && res.data.success == true) {
          console.log(res.data.token);
          debugger;
          dispatch({
            type: "SIGNIN_SUCCESS",
            payload: res.data.token,
          });
        }
      })
      .catch((res) => {
        if (res.response.status == 400 && res.response.data.success == false) {
          console.log(res.response.data.message);
          dispatch({
            type: "SIGNIN_FAILURE",
            payload: res.response.data.message,
          });
        } else {
          console.log(res.response);
        }
      });
  };
};
