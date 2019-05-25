import { Dispatch } from "redux"
import {
  UserProfileActionTypes,
  SetFullNameSuccessAction,
  SetFullNameErrorAction,
  SetProfilePictureSuccessAction,
  SetProfilePictureErrorAction,
} from "./types"

export const userProfileActions = {
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
  setFullName: () => async (dispatch: Dispatch) => {
    const random = Math.round(Math.random())
    setTimeout(() => {
      return random
        ? dispatch(userProfileActions.onSetFullNameSuccess("Luke Gurgel"))
        : dispatch(
            userProfileActions.onSetFullNameError(
              "Sorry, could not connect to the server.",
            ),
          )
    }, 1500)
  },
  setProfilePicture: () => async (dispatch: Dispatch) => {
    const random = Math.round(Math.random())
    setTimeout(() => {
      return random
        ? dispatch(
            userProfileActions.onSetProfilePictureSuccess(
              "https://facebook.github.io/react-native/docs/assets/favicon.png",
            ),
          )
        : dispatch(
            userProfileActions.onSetProfilePictureError(
              "Sorry, could not update your profile picture.",
            ),
          )
    }, 1500)
  },
}
