import { fetchSpeakersSuccess } from "store/actions";
import { FETCH_SPEAKERS_SUCCESS } from "store/actions/types";

describe("fetchSpeakersSuccess", () => {
  it("has a correct type", () => {
    const action = fetchSpeakersSuccess();
    expect(action.type).toEqual(FETCH_SPEAKERS_SUCCESS);
  });

  it("has a correct payload", () => {
    const action = fetchSpeakersSuccess([{}]);
    expect(action.payload).toEqual([{}]);
  });
});
