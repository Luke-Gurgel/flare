import { combineReducers } from "redux"
import { themeReducer as theme } from "./theme/index"
import { userLocationReducer as userLocation } from "./user-location/index"
import { InitialState } from "./initialState"

export default combineReducers<InitialState>({
  theme,
  userLocation,
})
