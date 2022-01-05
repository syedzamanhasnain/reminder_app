const initialState = {
  isForgotPasswordSuccess: false,
  isLoading: false,
  forgotPasswordMsg: "",
};

const forgotPaswodReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FORGOT_PASSWORD_STARTED":
      state = {
        ...state,
        isLoadig: true,
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

        isLoadig: false,
        isForgotPasswordSuccess: true,
        forgotPasswordMsg: action.payload,
      };
      break;
    case "FORGOT_PASSWORD_FAILURE": {
      state = {
        ...state,
        isLoadig: false,
        isForgotPasswordSuccess: false,
        forgotPasswordMsg: action.payload,
      };
      break;
    }
  }

  return state;
};
export default forgotPaswodReducer;
