const initialState = {
  reminders: [],
  reminderById: [],
  createReminderSuccessMsg: "",
  deleteByIdSuccessMsg: "",
  deleteCompletedSuccessMsg: "",
  editReminderSuccessMsg: "",
  deleteReminderByDateSuccessMsg: "",
};

const reminderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_REMINDERS":
      state = {
        ...state,
        deleteByIdSuccessMsg: "",
        createReminderSuccessMsg: "",
        editReminderSuccessMsg: "",
        deleteCompletedSuccessMsg: "",
        deleteReminderByDateSuccessMsg: "",
        reminders: Array.isArray(action.payload) ? action.payload : [],
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

    case "DELETE_COMPLETED_REMINDER":
      state = {
        ...state,
        deleteCompletedSuccessMsg: action.payload,
      };
      break;
    case "DELETE_REMINDER_BY_DATE":
      state = {
        ...state,
        deleteReminderByDateSuccessMsg: action.payload,
      };
      break;
  }

  return state;
};
export default reminderReducer;
