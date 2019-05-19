import { Dispatch } from "redux"
import {
  UserLocationState,
  UserLocationActionTypes,
  OnFetchLocationSuccess,
  OnFetchLocationError,
  OnFetchApproximateLocationSuccessAction,
  OnFetchApproximateLocationErrorAction,
} from "./types"

export const userLocationActions = {
  onFetchLocationSuccess: (
    location: UserLocationState,
  ): OnFetchLocationSuccess => ({
    type: UserLocationActionTypes.on_fetch_location_success,
    location,
  }),
  onFetchLocationError: (error: string): OnFetchLocationError => ({
    type: UserLocationActionTypes.on_fetch_location_error,
    error,
  }),
  onFetchApproximateLocationActionSuccess: (
    location: UserLocationState,
  ): OnFetchApproximateLocationSuccessAction => {
    return {
      type: UserLocationActionTypes.on_fetch_approximate_location_success,
      location,
    }
  },
  onFetchApproximateLocationActionError: (
    error: string,
  ): OnFetchApproximateLocationErrorAction => {
    return {
      type: UserLocationActionTypes.on_fetch_approximate_location_error,
      error,
    }
  },
}

const options = { timeout: 5000, enableHighAccuracy: true }

export const asyncUserLocationActions = {
  fetchLocation: () => async (dispatch: Dispatch) => {
    navigator.geolocation.getCurrentPosition(
      (location) => {
        // eslint-disable-next-line prettier/prettier
        const { coords: { latitude, longitude } } = location
        return dispatch(
          userLocationActions.onFetchLocationSuccess({
            latitude,
            longitude,
            isApproximate: false,
          }),
        )
      },
      (error) =>
        dispatch(userLocationActions.onFetchLocationError(error.message)),
      options,
    )
  },
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
