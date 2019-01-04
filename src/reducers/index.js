import { combineReducers } from "redux";
import copyText from "./copyText";
import changeTime from "./changeTime";

export default combineReducers({
  copyText,
  changeTime
});
