import { Dispatch } from "redux"
import { regionFrom } from "./location-helpers"
import { RequestState } from "src/types"
import {
  UserLocationState,
  UserLocationActionTypes,
  SetRequestStatusAction,
  OnFetchLocationSuccessAction,
  OnFetchApproximateLocationSuccessAction,
} from "./types"

export const userLocationActions = {
  setRequestStatus: (status: RequestState): SetRequestStatusAction => ({
    type: UserLocationActionTypes.set_location_request_status,
    status,
  }),
  onFetchLocationSuccess: (
    location: UserLocationState,
  ): OnFetchLocationSuccessAction => ({
    type: UserLocationActionTypes.on_fetch_location_success,
    location,
  }),
  onFetchApproximateLocationActionSuccess: (
    location: UserLocationState,
  ): OnFetchApproximateLocationSuccessAction => {
    return {
      type: UserLocationActionTypes.on_fetch_approximate_location_success,
      location,
    }
  },
}

const options = { timeout: 5000, enableHighAccuracy: true }

export const userLocationAsyncActions = {
  fetchLocation: () => async (dispatch: Dispatch) => {
    dispatch(
      userLocationActions.setRequestStatus({
        loading: true,
        status: "waiting",
      }),
    )
    return navigator.geolocation.getCurrentPosition(
      (location) => {
        const region = regionFrom(
          location.coords.latitude,
          location.coords.longitude,
          location.coords.accuracy,
        )
        dispatch(
          userLocationActions.onFetchLocationSuccess({
            ...region,
            isApproximate: false,
            status: "success",
            loading: false,
          }),
        )
      },
      (error) =>
        dispatch(
          userLocationActions.setRequestStatus({
            loading: false,
            status: "error",
            error: error.message,
          }),
        ),
      options,
    )
  },
  fetchApproximateLocation: () => (dispatch: Dispatch) => {
    dispatch(
      userLocationActions.setRequestStatus({
        loading: true,
        status: "waiting",
      }),
    )
    return fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((location) => {
        const { city, region, country, latitude, longitude } = location
        dispatch(
          userLocationActions.onFetchApproximateLocationActionSuccess({
            city,
            region,
            country,
            latitude,
            longitude,
            isApproximate: true,
            status: "success",
            loading: false,
          }),
        )
      })
      .catch((error) => {
        dispatch(
          dispatch(
            userLocationActions.setRequestStatus({
              loading: false,
              status: "error",
              error: error.message,
            }),
          ),
        )
      })
  },
}
