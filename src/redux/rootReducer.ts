import { combineReducers } from "redux"
import { themeReducer as theme } from "./theme/index"
import { InitialState } from "./initialState"

export default combineReducers<InitialState>({
  theme,
})
