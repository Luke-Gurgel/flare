import { UserAuthState, UserAuthActionTypes, UserAuthAction } from "./types"

export const userAuthState: UserAuthState = {
  loggedIn: true,
  email: "",
  loginError: undefined,
  signupError: undefined,
}

export const userAuthReducer = (
  state = userAuthState,
  action: UserAuthAction,
): UserAuthState => {
  switch (action.type) {
    case UserAuthActionTypes.log_in_success:
      return { ...state, loggedIn: true }
    case UserAuthActionTypes.sign_up_success:
      return { ...state, loggedIn: true }
    case UserAuthActionTypes.log_in_error:
      return { ...state, loggedIn: false, loginError: action.error }
    case UserAuthActionTypes.sign_up_error:
      return { ...state, loggedIn: false, signupError: action.error }
    case UserAuthActionTypes.log_out:
      return {
        ...state,
        loggedIn: false,
        email: "",
        loginError: undefined,
        signupError: undefined,
      }
    default:
      return state
  }
}
