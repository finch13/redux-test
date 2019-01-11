export const copyText = text => ({
  type: "COPY_TEXT",
  payload: text
});

export const changeTime = time => ({
  type: "CHANGE_TIME",
  payload: time
});

export const retrieveUsers = () => ({
  type: "RETRIVE_USERS"
});

export const setUsers = users => ({
  type: "SET_USERS",
  payload: users
});

export const deleteUser = id => ({
  type: "DELETE_USER",
  payload: id
});
