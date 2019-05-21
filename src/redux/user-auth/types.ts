export interface User {
  readonly email: string
  readonly fname?: string
  readonly lname?: string
}

export interface UserAuthState extends User {
  readonly loggedIn: boolean
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
  user: User
  type: UserAuthActionTypes.log_in_success
}

export interface LoginErrorAction {
  error: string
  type: UserAuthActionTypes.log_in_error
}

export interface SignupSuccessAction {
  user: User
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
