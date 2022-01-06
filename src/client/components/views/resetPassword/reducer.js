const initialState = {
  isResetPasswordSuccess: false,
  isLoading: false,
  resetPasswordMsg: "",
};

const resetPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RESET_PASSWORD_STARTED":
      state = {
        ...state,
        isLoading: true,
        isResetPasswordSuccess: false,
        resetPasswordMsg: "",
      };
      break;
    case "RESET_PASSWORD_RESET":
      state = {
        ...state,
        isResetPasswordSuccess: false,
        resetPasswordMsg: "",
      };
      break;
    case "RESET_PASSWORD_SUCCESS":
      state = {
        ...state,

        isLoading: false,
        isResetPasswordSuccess: true,
        resetPasswordMsg: action.payload,
      };
      break;
    case "RESET_PASSWORD_FAILURE": {
      state = {
        ...state,
        isLoading: false,
        isResetPasswordSuccess: false,
        resetPasswordMsg: action.payload,
      };
      break;
    }
  }

  return state;
};
export default resetPasswordReducer;
