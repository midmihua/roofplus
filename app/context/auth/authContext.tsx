"use client";

import { LS_KEYS } from "@/app/constants/localStorageKeys";
import {
  AuthUserActionType,
  AuthUserStateType,
  AuthUserType,
} from "@/app/types/authUser";
import {
  Dispatch,
  ReactNode,
  createContext,
  useEffect,
  useReducer,
} from "react";
import { AuthReducer } from "./authReducer";

const getInitialState = () => {
  // if (typeof window !== "undefined") {
  //   const user = localStorage.getItem(LS_KEYS.authUserKey);
  //   return user ? JSON.parse(user) : null;
  // }
  // return null;

  const user = localStorage.getItem(LS_KEYS.authUserKey);

  return user ? JSON.parse(user) : null;
};

const INITIAL_STATE: AuthUserStateType = {
  currentUser: getInitialState(),
};

interface ICreateContext {
  currentUser: AuthUserType;
  dispatch: Dispatch<AuthUserActionType>;
}

export const AuthContext = createContext<ICreateContext>(
  INITIAL_STATE as ICreateContext
);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem(
      LS_KEYS.authUserKey,
      JSON.stringify(state.currentUser)
    );
  }, [state.currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
