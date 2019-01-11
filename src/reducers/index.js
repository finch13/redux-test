import { combineReducers } from "redux";
import copyText from "./copyText";
import changeTime from "./changeTime";
import users from "./users.reducer";

export default combineReducers({
  copyText,
  changeTime,
  users
});
