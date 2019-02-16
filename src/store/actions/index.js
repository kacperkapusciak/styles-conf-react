import axios from "axios";
import { SET_SPEAKERS } from "store/actions/types";

export const setSpeakers = speakers => {
  return {
    type: SET_SPEAKERS,
    payload: speakers
  };
};

export const fetchSpeakers = () => {
  return dispatch => {
    axios
      .get("https://styles-conf-react.firebaseio.com/speakers.json")
      .then(response => {
        dispatch(setSpeakers(response.data));
      });
  };
};
