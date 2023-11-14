import { User } from "firebase/auth";

type AuthUserType = User | null;

type AuthUserStateType = {
  currentUser: AuthUserType;
};

type AuthUserActionType = {
  type: "LOGIN" | "LOGOUT";
  payload: User | null;
};
