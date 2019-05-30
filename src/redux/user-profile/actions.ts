import { Dispatch } from "redux"
import { RequestState } from "src/types"
import {
  UserProfileInfo,
  UserProfileState,
  UserProfileActionTypes,
  SetRequestStatus,
  OnSetProfileInfoSuccessAction,
} from "./types"

export const userProfileActions = {
  setRequestStatus: (status: RequestState): SetRequestStatus => {
    return {
      type: UserProfileActionTypes.set_profile_info_request_status,
      status,
    }
  },
  onSetProfileInfoSuccess: (
    info: UserProfileState,
  ): OnSetProfileInfoSuccessAction => {
    return {
      type: UserProfileActionTypes.on_set_profile_info_success,
      info,
    }
  },
}

export const userProfileAsyncActions = {
  setProfileInfo: (info: UserProfileInfo) => async (dispatch: Dispatch) => {
    dispatch(
      userProfileActions.setRequestStatus({
        loading: true,
        status: "waiting",
      }),
    )
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then(() => {
        dispatch(
          userProfileActions.onSetProfileInfoSuccess({
            ...info,
            loading: false,
            status: "success",
          }),
        )
      })
      .catch(() => {
        dispatch(
          userProfileActions.setRequestStatus({
            loading: false,
            status: "error",
          }),
        )
      })
  },
}
