const initialState = {
    createNewUser: {},
  };
  
  const signUpReducer = (state = initialState, action) => {
    switch (action.type) {
      case "CREATE_NEW_USER":
        state = {
          ...state,
          createNewUser: action.payload,
        };
        break;
    }
  
    return state;
  };
  export default signUpReducer;
  