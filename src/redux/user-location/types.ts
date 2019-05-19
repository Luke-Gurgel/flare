export interface UserLocationState {
  readonly latitude: number
  readonly longitude: number
  readonly isApproximate: boolean
  readonly city?: string
  readonly region?: string
  readonly country?: string
  readonly errorMessage?: null | string
}

export enum UserLocationActionTypes {
  on_fetch_approximate_location_success = "on_fetch_approximate_location_success",
  on_fetch_approximate_location_error = "on_fetch_approximate_location_error",
  on_fetch_location_success = "on_fetch_location_success",
  on_fetch_location_error = "on_fetch_location_error",
}

export interface OnFetchLocationSuccess {
  type: UserLocationActionTypes.on_fetch_location_success
  location: UserLocationState
}

export interface OnFetchLocationError {
  type: UserLocationActionTypes.on_fetch_location_error
  error: string
}

export interface OnFetchApproximateLocationSuccessAction {
  type: UserLocationActionTypes.on_fetch_approximate_location_success
  location: UserLocationState
}

export interface OnFetchApproximateLocationErrorAction {
  type: UserLocationActionTypes.on_fetch_approximate_location_error
  error: string
}

export type UserLocationAction =
  | OnFetchLocationSuccess
  | OnFetchLocationError
  | OnFetchApproximateLocationSuccessAction
  | OnFetchApproximateLocationErrorAction
