const initialState = {
  signupMessage: "",
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP_SUCCESS":
      state = {
        ...state,
        signupMessage: action.payload,
      };
      break;

    case "SIGNUP_FAILURE":
      state = {
        ...state,
        signupMessage: action.payload,
      };
      break;
  }

  return state;
};
export default signUpReducer;
