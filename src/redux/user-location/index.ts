import {
  UserLocationState,
  UserLocationAction,
  UserLocationActionTypes,
} from "./types"

export const userLocationState: UserLocationState = {
  city: "Boston",
  region: "Massachusetts",
  country: "US",
  latitude: 0,
  longitude: 0,
  isApproximate: false,
  errorMessage: null,
}

export const userLocationReducer = (
  state = userLocationState,
  action: UserLocationAction,
) => {
  switch (action.type) {
    case UserLocationActionTypes.on_fetch_approximate_location_success:
      return { ...state, ...action.location }
    case UserLocationActionTypes.on_fetch_approximate_location_error:
      return { ...state, errorMessage: action.error }
    case UserLocationActionTypes.on_fetch_location_success:
      return { ...state, ...action.location }
    case UserLocationActionTypes.on_fetch_location_error:
      return { ...state, errorMessage: action.error }
    default:
      return state
  }
}
