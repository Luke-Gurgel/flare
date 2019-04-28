import { createStore } from "redux"
import rootReducer from "./rootReducer"
import initialState from "./initialState"

export default () => createStore(rootReducer, initialState)
