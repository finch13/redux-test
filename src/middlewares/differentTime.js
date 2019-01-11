import { changeTime } from "../actions/actions.index";

export const differentTime = store => next => action => {
  console.log("changeTime >>>", changeTime(new Date()));
  console.log("getState before change >>", store.getState());
  if (action.type === "COPY_TEXT") {
    next(changeTime(new Date()));
  }
  next(action);
  console.log("getState after change >>", store.getState());
  return;
};
