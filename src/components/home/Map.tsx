import React from "react"
import { PROVIDER_GOOGLE } from "react-native-maps"
import { connect } from "react-redux"
import { InitialState } from "src/redux/initialState"
import { UserLocationState } from "src/redux/user-location/types"
import { StyledMap } from "./styled"
import { darkThemeStyle, lightThemeStyle } from "./map-styles"

interface MapStateProps {
  userLocation: UserLocationState
  isDark: boolean
}

const Map = ({ userLocation, isDark }: MapStateProps) => {
  return (
    <StyledMap
      loadingEnabled
      followsUserLocation
      showsMyLocationButton
      showsUserLocation={userLocation.isApproximate}
      provider={PROVIDER_GOOGLE}
      minZoomLevel={8}
      region={{
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
        latitudeDelta: userLocation.latitudeDelta || 0.0922,
        longitudeDelta: userLocation.longitudeDelta || 0.0421,
      }}
      customMapStyle={isDark ? darkThemeStyle : lightThemeStyle}
    />
  )
}

const mapState = (state: InitialState): MapStateProps => ({
  userLocation: state.userLocation,
  isDark: state.theme.isDark,
})

export default connect(mapState)(Map)
