const initialState = {
  time: new Date()
};

const changeTime = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_TIME":
      return {
        ...state,
        time: action.payload
      };
    default:
      return state;
  }
};

export default changeTime;
