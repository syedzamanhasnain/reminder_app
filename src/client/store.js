import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import homeReducer from "views/Home/reducer";
import signUpReducer from "views/signUp/reducer";
import signInReducer from "views/signIn/reducer";

export default () => {
  const store = createStore(
    combineReducers({
      homeReducer,
      signUpReducer,
      signInReducer,
      /* somemorereducer */
    }),
    IS_SERVER ? {} : window.INITIAL_STATE,
    composeWithDevTools(applyMiddleware(thunk))
  );
  return store;
};
