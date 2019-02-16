import { combineReducers } from "redux";
import speakersReducer from "store/reducers/speakers";

export default combineReducers({
  speakers: speakersReducer
});
