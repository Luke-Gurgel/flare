export interface UserLocationState {
  readonly city: string
  readonly region: string
  readonly country: string
  readonly latitude: number
  readonly longitude: number
  readonly isApproximate: boolean
  readonly errorMessage?: null | string
}

export enum UserLocationActionTypes {
  on_fetch_approximate_location_success = "on_fetch_approximate_location_success",
  on_fetch_approximate_location_error = "on_fetch_approximate_location_error",
  set_accurate_location = "set_accurate_location",
}

export interface OnFetchApproximateLocationSuccessAction {
  type: UserLocationActionTypes.on_fetch_approximate_location_success
  location: UserLocationState
}

export interface OnFetchApproximateLocationErrorAction {
  type: UserLocationActionTypes.on_fetch_approximate_location_error
  reason: string
}

export interface SetAccurateLocationAction {
  type: UserLocationActionTypes.set_accurate_location
  location: UserLocationState
}

export type UserLocationAction =
  | OnFetchApproximateLocationSuccessAction
  | OnFetchApproximateLocationErrorAction
  | SetAccurateLocationAction
