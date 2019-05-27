import { Dispatch } from "redux"
import {
  UserProfileState,
  UserProfileActionTypes,
  SetFullNameSuccessAction,
  SetFullNameErrorAction,
  SetProfilePictureSuccessAction,
  SetProfilePictureErrorAction,
  SetProfileInfoSuccessAction,
  SetProfileInfoErrorAction,
} from "./types"

export const userProfileActions = {
  onSetProfileInfoSuccess: (
    info: UserProfileState,
  ): SetProfileInfoSuccessAction => ({
    type: UserProfileActionTypes.set_profile_info_success,
    info,
  }),
  onSetProfileInfoError: (error: string): SetProfileInfoErrorAction => ({
    type: UserProfileActionTypes.set_profile_info_error,
    error,
  }),
  onSetFullNameSuccess: (fullName: string): SetFullNameSuccessAction => ({
    type: UserProfileActionTypes.set_full_name_success,
    fullName,
  }),
  onSetFullNameError: (error: string): SetFullNameErrorAction => ({
    type: UserProfileActionTypes.set_full_name_error,
    error,
  }),
  onSetProfilePictureSuccess: (
    picUri: string,
  ): SetProfilePictureSuccessAction => ({
    type: UserProfileActionTypes.set_profile_pic_success,
    picUri,
  }),
  onSetProfilePictureError: (error: string): SetProfilePictureErrorAction => ({
    type: UserProfileActionTypes.set_profile_pic_error,
    error,
  }),
}

export const userProfileAsyncActions = {
  setProfileInfo: (info: UserProfileState) => async (dispatch: Dispatch) => {
    const random = Math.round(Math.random())
    setTimeout(() => {
      return random
        ? dispatch(userProfileActions.onSetProfileInfoSuccess(info))
        : dispatch(
            userProfileActions.onSetProfileInfoError(
              "Sorry, could not connect to the server.",
            ),
          )
    }, 1500)
  },
}
