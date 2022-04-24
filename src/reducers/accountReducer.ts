const defaultState = {
  isLoggedIn: false,
  userId: "",
  usersQuizizz: [],
};

type Actions =
  | { type: "SIGN_IN"; payload: string }
  | { type: "LOGOUT" }
  | { type: "GOT_USERS_QUIZIZZ"; payload: {} };

export default (state = defaultState, action: Actions) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, isLoggedIn: true, userId: action.payload };
    case "LOGOUT":
      return { ...defaultState };
    case "GOT_USERS_QUIZIZZ":
      return {
        ...state,
        usersQuizizz: action.payload ? Object.values(action.payload) : [],
      };
    default:
      return state;
  }
};
