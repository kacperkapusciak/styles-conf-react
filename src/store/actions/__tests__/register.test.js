import configureMockStore from "redux-mock-store";
import axios from "axios-instance";
import MockAdapter from "axios-mock-adapter";

import { purchasePass, purchasePassSuccess } from "store/actions";
import {
  PURCHASE_PASS_START,
  PURCHASE_PASS_SUCCESS
} from "store/actions/types";

const postRegisterMock = {
  name: "",
  email: "",
  quantity: 1,
  comments: ""
};

describe("purchasePassSuccess", () => {
  it("has a correct type", () => {
    const action = purchasePassSuccess();
    expect(action.type).toEqual(PURCHASE_PASS_SUCCESS);
  });

  it("has a correct payload", () => {
    const action = purchasePassSuccess("id");
    expect(action.payload).toEqual("id");
  });
});

describe("purchasePass", () => {
  const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

  it("creates PURCHASE_PASS_SUCCESS after successfuly posting to firebase", async () => {
    const mock = new MockAdapter(axios);
    const mockStore = configureMockStore();
    const store = mockStore({});

    mock.onPost("/register.json", postRegisterMock).reply(200);
    // when
    purchasePass(postRegisterMock)(store.dispatch);
    await flushAllPromises();
    // then
    expect(store.getActions()).toEqual([
      { type: PURCHASE_PASS_START },
      { type: PURCHASE_PASS_SUCCESS }
    ]);
  });
});
