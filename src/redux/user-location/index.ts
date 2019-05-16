import {
  UserLocationState,
  UserLocationAction,
  UserLocationActionTypes,
  FetchApproximateLocationAction,
  SetApproximateLocationAction,
  SetAccurateLocation,
  FetchStatus,
} from "./types"

export const userLocationState: UserLocationState = {
  city: "Boston",
  region: "Massachusetts",
  country: "US",
  latitude: 0,
  longitude: 0,
  isApproximate: false,
}

export const userLocationActions = {
  fetchApproximateLocation: (
    status: FetchStatus,
  ): FetchApproximateLocationAction => ({
    type: UserLocationActionTypes.fetch_approximate_location,
    status,
  }),
  setApproximateLocation: (
    location: UserLocationState,
  ): SetApproximateLocationAction => ({
    type: UserLocationActionTypes.set_approximate_location,
    location,
  }),
  setAccurateLocation: (location: UserLocationState): SetAccurateLocation => ({
    type: UserLocationActionTypes.set_accurate_location,
    location,
  }),
}

export const userLocationReducer = (
  state = userLocationState,
  action: UserLocationAction,
) => {
  switch (action.type) {
    case UserLocationActionTypes.set_approximate_location:
      return { ...state, ...action.location, isApproximate: true }
    case UserLocationActionTypes.set_accurate_location:
      return { ...state, ...action.location, isApproximate: false }
    default:
      return state
  }
}
