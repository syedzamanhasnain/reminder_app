import HTTP from "utils/http.service";


export const createNewUser = (signUpData) => {
    return (dispatch) => {
      return HTTP({
        method: "POST",
        url: "/signup",
        data:signUpData,
      }).then((res) => {
          console.log(res);
        dispatch({
          type: "CREATE_NEW_USER",
          payload:signUpData,
        });
      });
    };
  };