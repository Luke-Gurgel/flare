import { combineReducers } from "redux"
import { themeReducer as theme } from "./theme"
import { userAuthReducer as userAuth } from "./user-auth"
import { userProfileReducer as userProfile } from "./user-profile"
import { userLocationReducer as userLocation } from "./user-location"
import { InitialState } from "./initialState"

export default combineReducers<InitialState>({
  userAuth,
  userProfile,
  userLocation,
  theme,
})
