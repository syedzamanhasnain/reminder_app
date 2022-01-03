const initialState = {
  isSigninSuccess: false,
  isLoading: false,
  signinMsg: "",
  jwtToken: "",
};

const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNIN_STARTED":
      state = {
        ...state,
        isLoadig: true,
        isSigninSuccess: false,
        signinMsg: "",
      };
      break;
    case "SIGNIN_SUCCESS":
      state = {
        ...state,
        isLoadig: false,
        isSigninSuccess: true,
        jwtToken: action.payload,
      };
      break;
    case "SIGNIN_FAILURE": {
      state = {
        ...state,
        isLoadig: false,
        isSigninSuccess: false,
        signinMsg: action.payload,
      };
      break;
    }
    case "SIGN_OUT": {
      state = {
        ...state,
        isLoadig: false,
        isSigninSuccess: false,
      };
      break;
    }
  }

  return state;
};
export default signInReducer;
