import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDoBcj-sCaly9m-FAGkCvSqsf6zDMMNdTo",
  authDomain: "quizizz-32675.firebaseapp.com",
  projectId: "quizizz-32675",
  storageBucket: "quizizz-32675.appspot.com",
  messagingSenderId: "1011088673153",
  appId: "1:1011088673153:web:606051f62217cf3ea3c080",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
