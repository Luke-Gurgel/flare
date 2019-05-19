import { themeState as theme, ThemeState } from "./theme/index"
import { userLocationState as userLocation } from "./user-location/index"
import { UserLocationState } from "./user-location/types"

export interface InitialState {
  theme: ThemeState
  userLocation: UserLocationState
}

const initialState: InitialState = {
  theme,
  userLocation,
}

export default initialState
