import { applyMiddleware } from "redux";
import { differentTime } from "./differentTime";

const rootMiddleware = applyMiddleware(differentTime);

export default rootMiddleware;
