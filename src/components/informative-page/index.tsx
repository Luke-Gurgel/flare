import React, { useEffect } from "react"
import { GeolocationError, AppState, AppStateStatus } from "react-native"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { Page } from "src/components/common/index"
import LaterButton from "./LaterButton"
import AllowButton from "./AllowButton"
import message from "./message"
import {
  ImageContainer,
  MessageTitle,
  Message,
  ButtonsContainer,
} from "./styled"
import {
  confirmationAlert,
  openSettingsApp,
  getApproximateLocation,
} from "./helperMethods"

const InformativePage = () => {
  const goToHomeScreen = () => {
    console.log("go to home screen")
  }

  function listenerHandler(appState: AppStateStatus) {
    if (appState === "active") {
      goToHomeScreen()
    }
  }

  useEffect(() => {
    return function cleanup() {
      AppState.removeEventListener("change", listenerHandler)
    }
  })

  const onGetLocationError = (error: GeolocationError) => {
    const permissionDenied = error.code === 1
    if (permissionDenied) {
      confirmationAlert(
        () => getApproximateLocation(goToHomeScreen),
        () => openSettingsApp(listenerHandler),
      )
    } else {
      goToHomeScreen()
    }
  }

  const checkForPermissionGranted = () => {
    navigator.geolocation.getCurrentPosition(
      goToHomeScreen,
      onGetLocationError,
      { timeout: 2000 },
    )
  }

  const askForAccessToLocation = () => {
    navigator.geolocation.requestAuthorization()
    checkForPermissionGranted()
  }

  return (
    <Page>
      <ImageContainer>
        <FontAwesome5 name={"gripfire"} size={180} color={"#39F3BB"} />
      </ImageContainer>
      <MessageTitle>Real quick...</MessageTitle>
      <Message>{message}</Message>
      <ButtonsContainer>
        <LaterButton onPress={() => getApproximateLocation(goToHomeScreen)} />
        <AllowButton onPress={askForAccessToLocation} />
      </ButtonsContainer>
    </Page>
  )
}

export default InformativePage
