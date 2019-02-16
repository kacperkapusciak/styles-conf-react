import axios from "axios";
import {
  FETCH_SPEAKERS_START,
  FETCH_SPEAKERS_SUCCESS,
  FETCH_SPEAKERS_FAIL
} from "store/actions/types";

export const fetchSpeakersStart = () => ({
  type: FETCH_SPEAKERS_START
});

export const fetchSpeakersSuccess = speakers => ({
  type: FETCH_SPEAKERS_SUCCESS,
  payload: speakers
});

export const fetchSpeakersFail = error => ({
  type: FETCH_SPEAKERS_FAIL,
  error: error
});

export const fetchSpeakers = () => dispatch => {
  dispatch(fetchSpeakersStart());
  return axios
    .get("https://styles-conf-react.firebaseio.com/speakers.json")
    .then(response => {
      dispatch(fetchSpeakersSuccess(response.data));
    })
    .catch(error => {
      dispatch(fetchSpeakersFail(error));
    });
};
