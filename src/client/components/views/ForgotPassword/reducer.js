const initialState = {
  isForgotPasswordSuccess: false,
  isLoading: false,
  forgotPasswordMsg: "",
};

const forgotPasswodReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FORGOT_PASSWORD_STARTED":
      state = {
        ...state,
        isLoading: true,
        isForgotPasswordSuccess: false,
        forgotPasswordMsg: "",
      };
      break;
    case "FORGOT_PASSWORD_RESET":
      state = {
        ...state,
        isForgotPasswordSuccess: false,
        forgotPasswordMsg: "",
      };
      break;
    case "FORGOT_PASSWORD_SUCCESS":
      state = {
        ...state,

        isLoading: false,
        isForgotPasswordSuccess: true,
        forgotPasswordMsg: action.payload,
      };
      break;
    case "FORGOT_PASSWORD_FAILURE": {
      state = {
        ...state,
        isLoading: false,
        isForgotPasswordSuccess: false,
        forgotPasswordMsg: action.payload,
      };
      break;
    }
  }

  return state;
};
export default forgotPasswodReducer;
