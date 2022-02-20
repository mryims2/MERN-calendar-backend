import { combineReducers } from "redux";

import authReducer from "./authReducer.js";
import calendarReducer from "./eventsReducer.js";
import uiReducer from "./uiReducer.js";

const rootReducer = combineReducers({
  auth: authReducer,
  calendar: calendarReducer,
  ui: uiReducer,
});

export default rootReducer;
