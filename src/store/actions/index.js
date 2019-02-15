import axios from "axios";
import { FETCH_SPEAKERS } from "store/actions/types";

export const fetchSpeakers = () => {
  const response = axios.get(
    "https://styles-conf-react.firebaseio.com/styles-conf-react.json"
  );

  return {
    type: FETCH_SPEAKERS,
    payload: response
  };
};
