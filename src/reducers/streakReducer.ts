type Actions = { type: "ADD_TO_STREAK" } | { type: "RESET_STREAK" };

export default (state = 0, action: Actions) => {
  switch (action.type) {
    case "ADD_TO_STREAK":
      return state + 1;
    case "RESET_STREAK":
      return 0;
    default:
      return state;
  }
};
