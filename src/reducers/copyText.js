const copyText = (state = [], action) => {
  switch (action.type) {
    case "COPY_TEXT":
      return [
        ...state,
        {
          text: action.text
        }
      ];
    default:
      return state;
  }
};

export default copyText;
