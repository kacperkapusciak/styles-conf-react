import { setSpeakers } from "store/actions";
import { SET_SPEAKERS } from "store/actions/types";

describe("setSpeakers", () => {
  it("has a correct type", () => {
    const action = setSpeakers();
    expect(action.type).toEqual(SET_SPEAKERS);
  });

  it("has a correct payload", () => {
    const action = setSpeakers([{}]);
    expect(action.payload).toEqual([{}]);
  });
});
