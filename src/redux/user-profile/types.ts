export interface UserProfileState {
  fullName: string
  profilePicture: string
  error?: string
}

export enum UserProfileActionTypes {
  set_profile_info_success = "set_profile_info_success",
  set_profile_info_error = "set_profile_info_error",
  set_full_name_success = "set_full_name_success",
  set_full_name_error = "set_full_name_error",
  set_profile_pic_success = "set_profile_pic_success",
  set_profile_pic_error = "set_profile_pic_error",
}

export interface SetProfileInfoSuccessAction {
  type: UserProfileActionTypes.set_profile_info_success
  info: UserProfileState
}

export interface SetProfileInfoErrorAction {
  type: UserProfileActionTypes.set_profile_info_error
  error: string
}

export interface SetFullNameSuccessAction {
  type: UserProfileActionTypes.set_full_name_success
  fullName: string
}

export interface SetFullNameErrorAction {
  type: UserProfileActionTypes.set_full_name_error
  error: string
}

export interface SetProfilePictureSuccessAction {
  type: UserProfileActionTypes.set_profile_pic_success
  picUri: string
}

export interface SetProfilePictureErrorAction {
  type: UserProfileActionTypes.set_profile_pic_error
  error: string
}

export type UserProfileAction =
  | SetProfileInfoSuccessAction
  | SetProfileInfoErrorAction
  | SetFullNameSuccessAction
  | SetFullNameErrorAction
  | SetProfilePictureSuccessAction
  | SetProfilePictureErrorAction
