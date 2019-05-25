export interface UserAuthState {
  readonly loggedIn: boolean
  readonly email: string
  readonly loginError?: string
  readonly signupError?: string
}

export enum UserAuthActionTypes {
  log_in_success = "log_in_success",
  log_in_error = "log_in_error",
  sign_up_success = "sign_up_success",
  sign_up_error = "sign_up_error",
  log_out = "log_out",
}

export interface LoginSuccessAction {
  email: string
  type: UserAuthActionTypes.log_in_success
}

export interface LoginErrorAction {
  error: string
  type: UserAuthActionTypes.log_in_error
}

export interface SignupSuccessAction {
  email: string
  type: UserAuthActionTypes.sign_up_success
}

export interface SignupErrorAction {
  error: string
  type: UserAuthActionTypes.sign_up_error
}

export interface LogoutAction {
  type: UserAuthActionTypes.log_out
}

export type UserAuthAction =
  | LoginSuccessAction
  | LoginErrorAction
  | SignupSuccessAction
  | SignupErrorAction
  | LogoutAction
