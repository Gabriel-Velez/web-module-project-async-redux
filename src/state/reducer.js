import { combineReducers } from "redux";
import axios from "axios";
import * as types from "./action-types";

const initalActivity = "Activty goes here";
function activity(activityStateSlice = initalActivity, action) {
  switch (action.type) {
    case types.POPULATE_ACTIVITY:
      return action.payload;
    default:
      return activityStateSlice;
  }
}

const rootReducer = combineReducers({ activity });
export default rootReducer;
