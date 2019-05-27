import {
  UserProfileState,
  UserProfileAction,
  UserProfileActionTypes,
} from "./types"

export const userProfileState: UserProfileState = {
  fullName: "",
  profilePicture: "",
  error: undefined,
}

export const userProfileReducer = (
  state = userProfileState,
  action: UserProfileAction,
): UserProfileState => {
  switch (action.type) {
    case UserProfileActionTypes.set_profile_info_success:
      return { ...state, ...action.info }
    case UserProfileActionTypes.set_profile_info_error:
      return { ...state, error: action.error }
    case UserProfileActionTypes.set_full_name_success:
      return { ...state, fullName: action.fullName, error: undefined }
    case UserProfileActionTypes.set_full_name_error:
      return { ...state, error: action.error }
    case UserProfileActionTypes.set_profile_pic_success:
      return { ...state, profilePicture: action.picUri, error: undefined }
    case UserProfileActionTypes.set_profile_pic_error:
      return { ...state, error: action.error }
    default:
      return state
  }
}
