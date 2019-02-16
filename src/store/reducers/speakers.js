import { FETCH_SPEAKERS_SUCCESS } from "store/actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_SPEAKERS_SUCCESS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
