import { combineReducers } from "redux";
import triviaReducer from "./triviaReducer";
import userReducer from "./userReducer";

export default combineReducers({
  trivia: triviaReducer,
  user: userReducer
});
