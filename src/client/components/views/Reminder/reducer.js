const initialState = {
  reminders: [],
 // createReminderSuccessMsg="",
};

const reminderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_REMINDERS":
      state = {
        ...state,
        reminders: action.payload,
      };
      break;
    case "GET_SINGLE_REMINDER":
      state = {
        ...state,
        reminders: action.payload,
      };
      break;
    case "CREATE_REMINDER":
      state = {
        ...state,
       //  createReminderSuccessMsg: action.payload,
      };
      break;
    case "EDIT_REMINDER":
      state = {
        ...state,
        reminders: action.payload,
      };
      break;

    case "DELETE_REMINDER":
      state = {
        ...state,
        reminders: action.payload,
      };
      break;
  }

  return state;
};
export default reminderReducer;
