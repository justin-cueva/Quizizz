type Actions = { type: "GOT_QUESTIONS" } | { type: "SET_WAITING_FOR_QUIZ" };

export default (state = false, action: Actions) => {
  switch (action.type) {
    case "GOT_QUESTIONS":
      return true;
    case "SET_WAITING_FOR_QUIZ":
      return false;
    default:
      return state;
  }
};
