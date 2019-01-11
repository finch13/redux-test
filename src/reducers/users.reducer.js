const initialState = [];

const users = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USERS":
      return [...action.payload];
    case "DELETE_USER":
      return state.filter(user => user.login.uuid !== action.payload);
    default:
      return state;
  }
};

export default users;
