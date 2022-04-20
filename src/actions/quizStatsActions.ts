export const addToScoreAndStreak = () => (dispatch: any) => {
  dispatch({ type: "ADD_TO_SCORE_n" });
  dispatch({ type: "ADD_TO_STREAK_n" });
};

export const resetScoreAndStreak = () => (dispatch: any) => {
  dispatch({ type: "RESET_SCORE_n" });
  dispatch({ type: "RESET_STREAK_n" });
};

export const resetStreak = () => {
  return { type: "RESET_STREAK_n" };
};

// export const addToStreak = () => {
//   return { type: "ADD_TO_STREAK" };
// };
