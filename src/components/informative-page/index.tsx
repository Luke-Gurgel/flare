import React, { useEffect } from "react"
import { AppState, AppStateStatus, Alert, Platform } from "react-native"
import Permissions from "react-native-permissions"
import AndroidOpenSettings from "react-native-android-open-settings"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { Page } from "src/components/common/index"
import LaterButton from "./LaterButton"
import AllowButton from "./AllowButton"
import { getApproximateLocation } from "./locationMethods"
import message from "./message"
import {
  ImageContainer,
  MessageTitle,
  Message,
  ButtonsContainer,
} from "./styled"

const InformativePage = () => {
  const goToHomeScreen = () => {}

  const handleNoPermission = () => {
    getApproximateLocation()
    // .then(goToHomeScreen)
  }

  const listenerHandler = (appState: AppStateStatus) => {
    if (appState === "active") {
      goToHomeScreen()
    }
  }

  const handleOpenSettings = () => {
    AppState.addEventListener("change", listenerHandler)
    if (Platform.OS === "android") {
      AndroidOpenSettings.appDetailsSettings()
    } else {
      Permissions.openSettings().catch(() => {
        Alert.alert(
          "Oops...",
          "Couldn't open the settings app. If you're still interested, hop over there and allow location access. Let's just go to the home screen now.",
          [{ text: "Ok, cool", onPress: handleNoPermission }],
        )
      })
    }
  }

  const confirmationAlert = () => {
    Alert.alert(
      "You're missing out!",
      "But remember, you can change this on the settings app at anytime.",
      [
        { text: "Not now", onPress: handleNoPermission },
        { text: "Open settings", onPress: handleOpenSettings },
      ],
    )
  }

  const requestLocationPermission = () => {
    Permissions.request("location").then((res) => {
      switch (res) {
        case "authorized":
          goToHomeScreen()
          break
        case "denied":
          confirmationAlert()
          break
        default:
          handleNoPermission()
      }
    })
  }

  useEffect(() => {
    return function cleanup() {
      AppState.removeEventListener("change", listenerHandler)
    }
  })

  return (
    <Page>
      <ImageContainer>
        <FontAwesome5 name={"gripfire"} size={180} color={"#39F3BB"} />
      </ImageContainer>
      <MessageTitle>Real quick...</MessageTitle>
      <Message>{message}</Message>
      <ButtonsContainer>
        <LaterButton onPress={handleNoPermission} />
        <AllowButton onPress={requestLocationPermission} />
      </ButtonsContainer>
    </Page>
  )
}

export default InformativePage
