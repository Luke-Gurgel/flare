import React, { useEffect } from "react"
import Permissions from "react-native-permissions"
import AndroidOpenSettings from "react-native-android-open-settings"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { Page, LoadingModal } from "src/components/common/index"
import LaterButton from "./LaterButton"
import AllowButton from "./AllowButton"
import message from "./message"
import { Props } from "./index"
import {
  AppState,
  AppStateStatus,
  Alert,
  Platform,
  BackHandler,
} from "react-native"
import {
  ImageContainer,
  MessageTitle,
  Message,
  ButtonsContainer,
} from "./styled"

const InformativePage = (props: Props) => {
  const onAppBecomeActive = async (appState: AppStateStatus) => {
    if (appState === "active") {
      const res = await Permissions.check("location")
      if (res === "authorized") props.fetchLocation()
      else props.fetchApproximateLocation()
    }
  }

  const handleOpenSettings = () => {
    AppState.addEventListener("change", onAppBecomeActive)
    if (Platform.OS === "android") {
      AndroidOpenSettings.appDetailsSettings()
    } else {
      Permissions.openSettings().catch(() => {
        Alert.alert(
          "Oops...",
          "Couldn't open the settings app. If you're still interested, hop over there and allow location access. Let's just go to the home screen for now.",
          [{ text: "Ok, cool", onPress: props.fetchApproximateLocation }],
        )
      })
    }
  }

  const confirmationAlert = () => {
    Alert.alert(
      "Are you sure?",
      "Remember you can change this on the settings app at anytime.",
      [
        { text: "Not now", onPress: props.fetchApproximateLocation },
        { text: "Open settings", onPress: handleOpenSettings },
      ],
    )
  }

  const requestLocationPermission = () => {
    Permissions.request("location").then((res) => {
      switch (res) {
        case "authorized":
          props.fetchLocation()
          break
        case "denied":
          confirmationAlert()
          break
        default:
          props.fetchApproximateLocation()
      }
    })
  }

  const encouragementAlert = () => {
    Alert.alert(
      "Are you sure?",
      "You'll miss out on the best experience Flare has to offer!",
      [
        { text: "Not now", onPress: props.fetchApproximateLocation },
        { text: "Ok, fine", onPress: requestLocationPermission },
      ],
    )
  }

  useEffect(() => {
    if (props.userLocation.status === "success") {
      setTimeout(() => props.navigation.navigate("home"), 750)
    } else if (props.userLocation.status === "error") {
      Alert.alert("Oops...", props.userLocation.error, [
        { text: "Ok, cool", onPress: () => props.navigation.navigate("home") },
      ])
    }

    const blockAndroidBackButtonTap = () => true
    BackHandler.addEventListener("hardwareBackPress", blockAndroidBackButtonTap)

    return function cleanup() {
      AppState.removeEventListener("change", onAppBecomeActive)
      BackHandler.removeEventListener(
        "hardwareBackPress",
        blockAndroidBackButtonTap,
      )
    }
  })

  return (
    <Page>
      <ImageContainer>
        <FontAwesome5 name={"gripfire"} size={180} color={"#39F3BB"} />
      </ImageContainer>
      <MessageTitle>One last thing...</MessageTitle>
      <Message>{message}</Message>
      <ButtonsContainer>
        <LaterButton onPress={encouragementAlert} />
        <AllowButton onPress={requestLocationPermission} />
      </ButtonsContainer>
      <LoadingModal visible={props.userLocation.loading} />
    </Page>
  )
}

export default InformativePage
