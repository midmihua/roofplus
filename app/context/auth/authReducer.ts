import { AuthUserActionType, AuthUserStateType } from "@/app/types/authUser";

export const AuthReducer = (
  state: AuthUserStateType,
  action: AuthUserActionType
) => {
  switch (action.type) {
    case "LOGIN":
      return {
        currentUser: action.payload,
      };
    case "LOGOUT":
      return {
        currentUser: null,
      };
    default:
      return state;
  }
};
