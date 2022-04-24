import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase-config";

export const register =
  (email: string, password: string) => async (dispatch: any) => {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    dispatch({ type: "SIGN_IN", payload: user.user.uid });
  };

export const login =
  (email: string, password: string) => async (dispatch: any) => {
    const user = await signInWithEmailAndPassword(auth, email, password);
    console.log("DISPATCHED");
    dispatch({ type: "SIGN_IN", payload: user.user.uid });
  };

export const logout = () => {
  return { type: "LOGOUT" };
};

export const fetchUsersQuizizz = () => async (dispatch: any, getState: any) => {
  const isLoggedIn = getState().account.isLoggedIn;
  const userId = getState().account.userId;

  if (!isLoggedIn) return;

  console.log("fetching users QUIZIZZ");

  const response = await fetch(
    `https://quizizz-32675-default-rtdb.firebaseio.com/${userId}/myBuilds.json`
  );
  const data = await response.json();
  console.log(data);
  dispatch({ type: "GOT_USERS_QUIZIZZ", payload: data });
};
