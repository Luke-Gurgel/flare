import { userAuthState as userAuth } from "./user-auth/index"
import { UserAuthState } from "./user-auth/types"
import { userLocationState as userLocation } from "./user-location/index"
import { UserLocationState } from "./user-location/types"
import { themeState as theme, ThemeState } from "./theme/index"

export interface InitialState {
  userAuth: UserAuthState
  userLocation: UserLocationState
  theme: ThemeState
}

const initialState: InitialState = {
  userAuth,
  userLocation,
  theme,
}

export default initialState
