import configureMockStore from "redux-mock-store";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import { fetchSpeakers, fetchSpeakersSuccess } from "store/actions";
import {
  FETCH_SPEAKERS_START,
  FETCH_SPEAKERS_SUCCESS
} from "store/actions/types";

const fetchSpeakersMock = [
  {
    about: [""],
    content: ["", ""],
    image: "",
    name: "",
    surname: "",
    title: ""
  }
];

describe("fetchSpeakersSuccess", () => {
  it("has a correct type", () => {
    const action = fetchSpeakersSuccess();
    expect(action.type).toEqual(FETCH_SPEAKERS_SUCCESS);
  });

  it("has a correct payload", () => {
    const action = fetchSpeakersSuccess(fetchSpeakersMock);
    expect(action.payload).toEqual(fetchSpeakersMock);
  });
});

describe("fetchSpeakers", () => {
  //code from https://blog.pragmatists.com/genuine-guide-to-testing-react-redux-applications-6f3265c11f63
  //thank you Jakub Żmuda, works like a charm
  const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

  it("creates FETCH_SPEAKERS_SUCCESS after successfuly fetching speakers", async () => {
    const mock = new MockAdapter(axios);
    const mockStore = configureMockStore();
    const store = mockStore({});

    mock
      .onGet("https://styles-conf-react.firebaseio.com/speakers.json")
      .reply(200, fetchSpeakersMock);
    // when
    fetchSpeakers()(store.dispatch);
    await flushAllPromises();
    // then
    expect(store.getActions()).toEqual([
      { type: FETCH_SPEAKERS_START },
      { type: FETCH_SPEAKERS_SUCCESS, payload: fetchSpeakersMock }
    ]);
  });
});
