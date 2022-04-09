type Actions = { type: "ADD_TO_SCORE" } | { type: "RESET_SCORE" };

export default (state = 0, action: Actions) => {
  switch (action.type) {
    case "ADD_TO_SCORE":
      return state + 1;
    case "RESET_SCORE":
      return 0;
    default:
      return state;
  }
};
