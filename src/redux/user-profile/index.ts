import {
  UserProfileState,
  UserProfileAction,
  UserProfileActionTypes,
} from "./types"

export const userProfileState: UserProfileState = {
  fullName: "",
  profilePicture: "",
  loading: false,
  requestStatus: "none",
}

export const userProfileReducer = (
  state = userProfileState,
  action: UserProfileAction,
): UserProfileState => {
  switch (action.type) {
    case UserProfileActionTypes.set_request_status:
      return { ...state, ...action.status }
    case UserProfileActionTypes.on_set_profile_info_success:
      return { ...state, ...action.info }
    default:
      return state
  }
}
