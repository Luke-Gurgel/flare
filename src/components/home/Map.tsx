import React from "react"
import { PROVIDER_GOOGLE } from "react-native-maps"
import { connect } from "react-redux"
import { InitialState } from "src/redux/initialState"
import { UserLocationState } from "src/redux/user-location/types"
import { StyledMap } from "./styled"

interface MapStateProps {
  userLocation: UserLocationState
}

const Map = ({ userLocation }: MapStateProps) => {
  return (
    <StyledMap
      loadingEnabled
      showsUserLocation
      followsUserLocation
      showsMyLocationButton
      provider={PROVIDER_GOOGLE}
      minZoomLevel={8}
      region={{
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
        latitudeDelta: userLocation.latitudeDelta || 0.0922,
        longitudeDelta: userLocation.longitudeDelta || 0.0421,
      }}
    />
  )
}

const mapState = (state: InitialState): MapStateProps => ({
  userLocation: state.userLocation,
})

export default connect(mapState)(Map)
