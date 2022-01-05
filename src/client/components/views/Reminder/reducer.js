const initialState = {
  reminders: [],
  reminderById: [],
  createReminderSuccessMsg: "",
  deleteByIdSuccessMsg: "",
  editReminderSuccessMsg: "",
};

const reminderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_REMINDERS":
      state = {
        ...state,
        deleteByIdSuccessMsg: "",
        createReminderSuccessMsg: "",
        editReminderSuccessMsg: "",
        reminders: action.payload,
      };
      break;
    case "GET_REMINDER_BY_ID":
      state = {
        ...state,
        reminderById: action.payload,
      };
      break;
    case "EDIT_REMINDER_BY_ID":
      state = {
        ...state,
        editReminderSuccessMsg: action.payload,
      };
      break;

    case "CREATE_REMINDER":
      state = {
        ...state,
        createReminderSuccessMsg: action.payload,
      };
      break;

    case "DELETE_REMINDER_BY_ID":
      state = {
        ...state,
        deleteByIdSuccessMsg: action.payload,
      };
      break;
  }

  return state;
};
export default reminderReducer;
