type Actions = { type: "PAUSE_QUIZ" } | { type: "UNPAUSE_QUIZ" };

export default (state = false, action: Actions) => {
  switch (action.type) {
    case "PAUSE_QUIZ":
      return true;
    case "UNPAUSE_QUIZ":
      return false;
    default:
      return state;
  }
};
