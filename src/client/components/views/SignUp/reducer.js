const initialState = {
  isSignupSuccess: false,
  isLoading: false,
  signupMsg: "",
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP_STARTED":
      state = {
        ...state,
        isLoadig: true,
        isSignupSuccess: false,
        signupMsg: "",
      };
      break;
    case "SIGNUP_RESET":
      state = {
        ...state,
        isSignupSuccess: false,
        signupMsg: "",
      };
      break;
    case "SIGNUP_SUCCESS":
      state = {
        ...state,

        isLoadig: false,
        isSignupSuccess: true,
        signupMsg: action.payload,
      };
      break;
    case "SIGNUP_FAILURE": {
      state = {
        ...state,
        isLoadig: false,
        isSignupSuccess: false,
        signupMsg: action.payload,
      };
      break;
    }
  }

  return state;
};
export default signUpReducer;
