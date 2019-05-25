import { Dispatch } from "redux"
import {
  UserAuthActionTypes,
  LoginSuccessAction,
  LoginErrorAction,
  SignupSuccessAction,
  SignupErrorAction,
  LogoutAction,
} from "./types"

export const userAuthActions = {
  onLoginSuccess: (email: string): LoginSuccessAction => ({
    type: UserAuthActionTypes.log_in_success,
    email,
  }),
  onLoginError: (error: string): LoginErrorAction => ({
    type: UserAuthActionTypes.log_in_error,
    error,
  }),
  onSignupSuccess: (email: string): SignupSuccessAction => ({
    type: UserAuthActionTypes.sign_up_success,
    email,
  }),
  onSignupError: (error: string): SignupErrorAction => ({
    type: UserAuthActionTypes.sign_up_error,
    error,
  }),
  onLogout: (): LogoutAction => ({
    type: UserAuthActionTypes.log_out,
  }),
}

export const userAuthAsyncActions = {
  logIn: () => async (dispatch: Dispatch) => {
    const random = Math.round(Math.random())
    setTimeout(() => {
      return random
        ? dispatch(userAuthActions.onLoginSuccess("me@mail.com"))
        : dispatch(userAuthActions.onLoginError("Sorry, couldn't log in."))
    }, 1500)
  },
  signUp: () => async (dispatch: Dispatch) => {
    const random = Math.round(Math.random())
    setTimeout(() => {
      return random
        ? dispatch(userAuthActions.onSignupSuccess("me@mail.com"))
        : dispatch(userAuthActions.onSignupError("Sorry, couldn't sign up."))
    }, 1500)
  },
}
