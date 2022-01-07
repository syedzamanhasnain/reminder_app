import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import signUpReducer from "views/signUp/reducer";
import signInReducer from "views/signIn/reducer";
import reminderReducer from "views/Reminder/reducer";
import forgotPasswordReducer from "views/ForgotPassword/reducer";
import resetPasswordReducer from "views/ResetPassword/reducer";

export default () => {
  const store = createStore(
    combineReducers({
      signUpReducer,
      signInReducer,
      reminderReducer,
      forgotPasswordReducer,
      resetPasswordReducer,
      /* somemorereducer */
    }),
    IS_SERVER ? {} : window.INITIAL_STATE,
    composeWithDevTools(applyMiddleware(thunk))
  );
  return store;
};
