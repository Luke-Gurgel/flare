import { RequestState } from "src/types"

export interface UserProfileInfo {
  readonly fullName: string
  readonly profilePicture: string
}

export interface UserProfileState extends UserProfileInfo, RequestState {}

export enum UserProfileActionTypes {
  set_profile_info_request_status = "set_profile_info_request_status",
  on_set_profile_info_success = "on_set_profile_info_success",
}

export interface SetRequestStatus {
  type: UserProfileActionTypes.set_profile_info_request_status
  status: RequestState
}

export interface OnSetProfileInfoSuccessAction {
  type: UserProfileActionTypes.on_set_profile_info_success
  info: UserProfileState
}

export type UserProfileAction = SetRequestStatus | OnSetProfileInfoSuccessAction
