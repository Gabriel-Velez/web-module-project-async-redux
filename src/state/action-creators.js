import * as types from "./action-types";
import axios from "axios";

export const fetchRandomActivityFromApi = () => (dispatch) => {
  axios
    .get("http://www.boredapi.com/api/activity/")
    .then((res) => {
      const activityFromApi = res.data.activity;
      dispatch({ type: types.POPULATE_ACTIVITY, payload: activityFromApi });
    })
    .catch((err) => {
      (err) => console.error(err);
    });
  return {
    type: types.POPULATE_ACTIVITY,
  };
};

export const fetchSpecificActivityFromApi = (url) => (dispatch) => {
  axios
    .get(url)
    .then((res) => {
      if (res.data.error) {
        console.log(res);
        const errorFromApi = res.data.error;
        dispatch({ type: types.POPULATE_ERROR, payload: errorFromApi });
      } else {
        console.log(res);
        const activityFromApi = res.data.activity;
        dispatch({ type: types.POPULATE_ACTIVITY, payload: activityFromApi });
        dispatch({ type: types.POPULATE_ERROR, payload: "" });
      }
    })
    .catch((err) => {
      (err) => console.error(err);
    });
  return {
    type: types.POPULATE_ACTIVITY,
  };
};
