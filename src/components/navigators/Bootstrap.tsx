import React from "react"
import { connect } from "react-redux"
import { InitialState } from "src/redux/initialState"
import RootNavigator from "./RootNavigator"
import HomeNavigator from "./HomeNavigator"

interface MapStateProps {
  loggedIn: boolean
}

const Bootstrap = ({ loggedIn }: MapStateProps) => {
  return loggedIn ? <HomeNavigator /> : <RootNavigator />
}

const mapState = (state: InitialState): MapStateProps => ({
  loggedIn: state.userAuth.loggedIn,
})

export default connect(mapState)(Bootstrap)
