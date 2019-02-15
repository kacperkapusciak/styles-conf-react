import { SET_SPEAKERS } from "store/actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case SET_SPEAKERS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
