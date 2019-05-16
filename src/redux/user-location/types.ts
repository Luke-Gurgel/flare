export interface UserLocationState {
  city: string
  region: string
  country: string
  latitude: number
  longitude: number
  isApproximate: boolean
}

export enum UserLocationActionTypes {
  fetch_approximate_location = "fetch_approximate_location",
  set_approximate_location = "set_approximate_location",
  set_accurate_location = "set_accurate_location",
}

export type FetchStatus = "ongoing" | "error" | "success"

export interface FetchApproximateLocationAction {
  type: UserLocationActionTypes.fetch_approximate_location
  status: FetchStatus
}

export interface SetApproximateLocationAction {
  type: UserLocationActionTypes.set_approximate_location
  location: UserLocationState
}

export interface SetAccurateLocation {
  type: UserLocationActionTypes.set_accurate_location
  location: UserLocationState
}

export type UserLocationAction =
  | FetchApproximateLocationAction
  | SetApproximateLocationAction
  | SetAccurateLocation
