import { RequestState } from "src/types"

export interface UserLocation {
  readonly latitude: number
  readonly longitude: number
  readonly isApproximate: boolean
  readonly latitudeDelta?: number
  readonly longitudeDelta?: number
  readonly city?: string
  readonly region?: string
  readonly country?: string
}

export interface UserLocationState extends UserLocation, RequestState {}

export enum UserLocationActionTypes {
  set_location_request_status = "set_location_request_status",
  on_fetch_approximate_location_success = "on_fetch_approximate_location_success",
  on_fetch_location_success = "on_fetch_location_success",
}

export interface SetRequestStatusAction {
  type: UserLocationActionTypes.set_location_request_status
  status: RequestState
}

export interface OnFetchLocationSuccessAction {
  type: UserLocationActionTypes.on_fetch_location_success
  location: UserLocationState
}

export interface OnFetchApproximateLocationSuccessAction {
  type: UserLocationActionTypes.on_fetch_approximate_location_success
  location: UserLocationState
}

export type UserLocationAction =
  | SetRequestStatusAction
  | OnFetchLocationSuccessAction
  | OnFetchApproximateLocationSuccessAction
