import { Dispatch } from "redux"
import {
  UserProfileInfo,
  UserProfileState,
  UserProfileRequest,
  UserProfileActionTypes,
  SetRequestStatus,
  OnSetProfileInfoSuccessAction,
  OnSetProfileInfoErrorAction,
} from "./types"

export const userProfileActions = {
  setRequestStatus: (status: UserProfileRequest): SetRequestStatus => {
    return {
      type: UserProfileActionTypes.set_request_status,
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
  onSetProfileInfoError: (): OnSetProfileInfoErrorAction => {
    return {
      type: UserProfileActionTypes.on_set_profile_info_error,
    }
  },
}

export const userProfileAsyncActions = {
  setProfileInfo: (info: UserProfileInfo) => async (dispatch: Dispatch) => {
    dispatch(
      userProfileActions.setRequestStatus({
        loading: true,
        requestStatus: "waiting",
      }),
    )
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then(() => {
        dispatch(
          userProfileActions.onSetProfileInfoSuccess({
            ...info,
            loading: false,
            requestStatus: "success",
          }),
        )
      })
      .catch(() => {
        dispatch(
          userProfileActions.setRequestStatus({
            loading: false,
            requestStatus: "error",
          }),
        )
      })
  },
}
