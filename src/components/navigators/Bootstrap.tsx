import React from "react"
import { connect } from "react-redux"
import { InitialState } from "src/redux/initialState"
import { ThemeProvider } from "styled-components/native"
import themes from "src/styles/themes"
import RootNavigator from "./RootNavigator"
import HomeNavigator from "./HomeNavigator"

interface MapStateProps {
  loggedIn: boolean
  isDark: boolean
}

const Bootstrap = ({ loggedIn, isDark }: MapStateProps) => {
  return (
    <ThemeProvider theme={isDark ? themes.dark : themes.light}>
      {loggedIn ? <HomeNavigator /> : <RootNavigator />}
    </ThemeProvider>
  )
}

const mapState = (state: InitialState): MapStateProps => ({
  loggedIn: state.userAuth.loggedIn,
  isDark: state.theme.isDark,
})

export default connect(mapState)(Bootstrap)
