import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "remote-redux-devtools"
import thunk from "redux-thunk"
import rootReducer from "./rootReducer"
import initialState from "./initialState"

const composeEnhancers = composeWithDevTools({ realtime: true, port: 8081 })

export default () =>
  createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk)),
  )
