import { Dispatch } from "redux"
import {
  User,
  UserAuthActionTypes,
  LoginSuccessAction,
  LoginErrorAction,
  SignupSuccessAction,
  SignupErrorAction,
  LogoutAction,
} from "./types"

export const userAuthActions = {
  onLoginSuccess: (user: User): LoginSuccessAction => ({
    type: UserAuthActionTypes.log_in_success,
    user,
  }),
  onLoginError: (error: string): LoginErrorAction => ({
    type: UserAuthActionTypes.log_in_error,
    error,
  }),
  onSignupSuccess: (user: User): SignupSuccessAction => ({
    type: UserAuthActionTypes.sign_up_success,
    user,
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
        ? dispatch(userAuthActions.onLoginSuccess({ email: "f@f.io" }))
        : dispatch(userAuthActions.onLoginError("Sorry, couldn't log in."))
    }, 1500)
  },
  signUp: () => async (dispatch: Dispatch) => {
    const random = Math.round(Math.random())
    setTimeout(() => {
      return random
        ? dispatch(userAuthActions.onSignupSuccess({ email: "f@f.io" }))
        : dispatch(userAuthActions.onSignupError("Sorry, couldn't sign up."))
    }, 1500)
  },
}
