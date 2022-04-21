import * as types from "./action-types";
import axios from "axios";

export const fetchRandomActivityFromApi = () => (dispatch) => {
  //   let activityFromApi;
  axios
    .get("http://www.boredapi.com/api/activity/")
    .then((res) => {
      //   console.log(res.data.activity);
      const activityFromApi = res.data.activity;
      dispatch({ type: types.POPULATE_ACTIVITY, payload: activityFromApi });
    })
    .catch((err) => {
      (err) => console.error(err);
    });
  return {
    type: types.POPULATE_ACTIVITY,
    // payload: activityFromApi,
  };
};
