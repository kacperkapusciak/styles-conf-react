import speakersReducer from "store/reducers/speakers";
import { SET_SPEAKERS } from "store/actions/types";

it("handles actions of type SET_SPEAKERS", () => {
  const action = {
    type: SET_SPEAKERS,
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
