type RequestStatus = "success" | "error" | "waiting" | "none"

export interface UserProfileInfo {
  readonly fullName: string
  readonly profilePicture: string
}

export interface UserProfileRequest {
  readonly loading: boolean
  readonly requestStatus: RequestStatus
}

export interface UserProfileState extends UserProfileInfo, UserProfileRequest {}

export enum UserProfileActionTypes {
  set_request_status = "set_request_status",
  on_set_profile_info_success = "on_set_profile_info_success",
  on_set_profile_info_error = "on_set_profile_info_error",
}

export interface SetRequestStatus {
  type: UserProfileActionTypes.set_request_status
  status: UserProfileRequest
}

export interface OnSetProfileInfoSuccessAction {
  type: UserProfileActionTypes.on_set_profile_info_success
  info: UserProfileState
}

export interface OnSetProfileInfoErrorAction {
  type: UserProfileActionTypes.on_set_profile_info_error
}

export type UserProfileAction =
  | SetRequestStatus
  | OnSetProfileInfoSuccessAction
  | OnSetProfileInfoErrorAction
