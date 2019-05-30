import {
  UserLocationState,
  UserLocationAction,
  UserLocationActionTypes,
} from "./types"

export const userLocationState: UserLocationState = {
  city: "Boston",
  region: "Massachusetts",
  country: "US",
  latitude: 42.258605,
  longitude: -71.484266,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
  isApproximate: false,
  status: "none",
  loading: false,
  error: undefined,
}

export const userLocationReducer = (
  state = userLocationState,
  action: UserLocationAction,
): UserLocationState => {
  switch (action.type) {
    case UserLocationActionTypes.on_fetch_approximate_location_success:
      return { ...state, ...action.location }
    case UserLocationActionTypes.on_fetch_location_success:
      return { ...state, ...action.location }
    case UserLocationActionTypes.set_location_request_status:
      return { ...state, ...action.status }
    default:
      return state
  }
}
