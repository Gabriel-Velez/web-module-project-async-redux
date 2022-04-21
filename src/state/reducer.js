import { combineReducers } from "redux";
import axios from "axios";
import * as types from "./action-types";

const initalActivity = "";
function activity(activityStateSlice = initalActivity, action) {
  switch (action.type) {
    case types.POPULATE_ACTIVITY:
      return action.payload;
    default:
      return activityStateSlice;
  }
}

const initalError = "";
function error(errorStateSlice = initalError, action) {
  switch (action.type) {
    case types.POPULATE_ERROR:
      return action.payload;
    default:
      return errorStateSlice;
  }
}

const rootReducer = combineReducers({ activity, error });
export default rootReducer;
