import { setUsers } from "../actions/actions.index";

export const getUsers = store => next => action => {
  if (action.type === "RETRIVE_USERS") {
    let url = "https://randomuser.me/api/?results=5";
    fetch(url)
      .then(data => data.json())
      .then(data => {
        console.log("getUsers data >>>", data.results);
        next(setUsers(data.results));
      })
      .catch(err => console.log("errr >>", err));
  }

  next(action);
};
