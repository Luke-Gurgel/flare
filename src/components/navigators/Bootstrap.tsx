import React from "react"
import { connect } from "react-redux"
import { InitialState } from "src/redux/initialState"
import Home from "../home/index"
import RootNavigator from "./RootNavigator"

interface MapStateProps {
  loggedIn: boolean
}

const Bootstrap = ({ loggedIn }: MapStateProps) => {
  return loggedIn ? <Home /> : <RootNavigator />
}

const mapState = (state: InitialState): MapStateProps => ({
  loggedIn: state.userAuth.loggedIn,
})

export default connect(mapState)(Bootstrap)
