type Actions = { type: "SET_URL"; payload: string } | { type: "RESET_URL" };

export default (state = "", action: Actions) => {
  switch (action.type) {
    case "SET_URL":
      return action.payload;
    case "RESET_URL":
      return "";
    default:
      return state;
  }
};
