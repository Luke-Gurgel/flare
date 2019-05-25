import { userAuthState as userAuth } from "./user-auth"
import { UserAuthState } from "./user-auth/types"
import { userLocationState as userLocation } from "./user-location"
import { UserLocationState } from "./user-location/types"
import { themeState as theme, ThemeState } from "./theme"
import { userProfileState as userProfile } from "./user-profile"
import { UserProfileState } from "./user-profile/types"

export interface InitialState {
  userAuth: UserAuthState
  userProfile: UserProfileState
  userLocation: UserLocationState
  theme: ThemeState
}

const initialState: InitialState = {
  userAuth,
  userProfile,
  userLocation,
  theme,
}

export default initialState
