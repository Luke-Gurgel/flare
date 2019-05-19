import { Dispatch } from "redux"
import {
  UserLocationState,
  UserLocationActionTypes,
  OnFetchApproximateLocationSuccessAction,
  OnFetchApproximateLocationErrorAction,
  SetAccurateLocationAction,
} from "./types"

export const userLocationActions = {
  onFetchApproximateLocationActionSuccess: (
    location: UserLocationState,
  ): OnFetchApproximateLocationSuccessAction => {
    return {
      type: UserLocationActionTypes.on_fetch_approximate_location_success,
      location,
    }
  },
  onFetchApproximateLocationActionError: (
    reason: string,
  ): OnFetchApproximateLocationErrorAction => {
    return {
      type: UserLocationActionTypes.on_fetch_approximate_location_error,
      reason,
    }
  },
  setAccurateLocation: (
    location: UserLocationState,
  ): SetAccurateLocationAction => ({
    type: UserLocationActionTypes.set_accurate_location,
    location,
  }),
}

export const asyncUserLocationActions = {
  fetchApproximateLocation: () => async (dispatch: Dispatch) => {
    try {
      const res = await fetch("https://ipapi.co/json/")
      const location = await res.json()
      const { city, region, country, latitude, longitude } = location
      return dispatch(
        userLocationActions.onFetchApproximateLocationActionSuccess({
          city,
          region,
          country,
          latitude,
          longitude,
          isApproximate: true,
        }),
      )
    } catch (error) {
      return dispatch(
        userLocationActions.onFetchApproximateLocationActionError(error.reason),
      )
    }
  },
}
