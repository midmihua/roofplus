import { FirebaseError, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { ERROR_MESSAGES } from "../constants/errorMessages";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_apiKey,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_authDomain,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_projectId,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_FIREBASE_appId,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const firebaseErrorMapper = (err: Error | FirebaseError) => {
  let errorMessage: String | null = null;

  if (err instanceof FirebaseError) {
    // auth/invalid-email
    if (err.code?.includes("invalid-email")) {
      errorMessage = ERROR_MESSAGES.auth.firebaseError.invalidEmail;
    }
    // /auth/invalid-login-credentials
    else if (err.code?.includes("invalid-login-credentials")) {
      errorMessage = ERROR_MESSAGES.auth.firebaseError.invalidLoginCredentials;
    }
  } else {
    errorMessage = ERROR_MESSAGES.default.unexpected;
  }

  return errorMessage;
};
