import speakersReducer from "store/reducers/speakers";
import { FETCH_SPEAKERS_SUCCESS } from "store/actions/types";

it("handles actions of type FETCH_SPEAKERS_SUCCESS", () => {
  const action = {
    type: FETCH_SPEAKERS_SUCCESS,
    payload: [[{}, {}]]
  };

  const newState = speakersReducer([], action);
  expect(newState).toEqual([[{}, {}]]);
});

it("handles action with unknown type", () => {
  const action = {
    type: "QWERTY"
  };

  const newState = speakersReducer([], action);
  expect(newState).toEqual([]);
});
