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
