type Actions = { type: "SET_IS_SHOWING" } | { type: "HIDE_RESULTS" };

export default (state = false, action: Actions) => {
  switch (action.type) {
    case "SET_IS_SHOWING":
      return true;
    case "HIDE_RESULTS":
      return false;
    default:
      return state;
  }
};
