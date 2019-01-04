const initialState = {
  text: "test"
};

const copyText = (state = initialState, action) => {
  switch (action.type) {
    case "COPY_TEXT":
      return {
        ...state,
        text: action.payload
      };
    default:
      return state;
  }
};

export default copyText;
