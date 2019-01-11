import { applyMiddleware } from "redux";
import { differentTime } from "./differentTime";
import { getUsers } from "./getUsers";

const rootMiddleware = applyMiddleware(differentTime, getUsers);

export default rootMiddleware;
