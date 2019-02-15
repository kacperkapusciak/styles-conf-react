import { FETCH_SPEAKERS } from "store/actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_SPEAKERS:
      return [...state, action.payload];
    default:
      return state;
  }
};
