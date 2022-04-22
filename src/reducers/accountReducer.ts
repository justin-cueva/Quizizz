const defaultState = {
  isLoggedIn: false,
  userId: "",
  usersQuizizz: {},
};

type Actions = { type: "SIGN_IN"; payload: string } | { type: "LOGOUT" };

export default (state = defaultState, action: Actions) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, isLoggedIn: true, userId: action.payload };
    case "LOGOUT":
      return { ...defaultState };
    default:
      return state;
  }
};
