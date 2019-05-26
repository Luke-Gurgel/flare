import React, { useState, useEffect } from "react"
import {
  AppState,
  AppStateStatus,
  Alert,
  Platform,
  BackHandler,
} from "react-native"
import Permissions from "react-native-permissions"
import AndroidOpenSettings from "react-native-android-open-settings"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { Page, LoadingModal } from "src/components/common/index"
import LaterButton from "./LaterButton"
import AllowButton from "./AllowButton"
import message from "./message"
import { MapDispatchProps, MapStateProps } from "./index"
import { NavigationScreenProps } from "react-navigation"
import {
  ImageContainer,
  MessageTitle,
  Message,
  ButtonsContainer,
} from "./styled"

interface Props
  extends MapDispatchProps,
    MapStateProps,
    NavigationScreenProps {}

const InformativePage = (props: Props) => {
  const [loading, setLoading] = useState(false)

  const goToHomeScreen = () => {
    setLoading(false)
    props.navigation.navigate("home")
  }

  const fetchLocation = async () => {
    setLoading(true)
    await props.fetchLocation()
    if (props.fetchLocationError) {
      Alert.alert(
        "Oops...",
        "Could not fetch your location. We'll center the map on Boston, MA. You can change that in your profile settings.",
        [{ text: "Ok, cool", onPress: goToHomeScreen }],
      )
    } else goToHomeScreen()
  }

  const fetchApproximateLocation = async () => {
    setLoading(true)
    await props.fetchApproximateLocation()
    if (props.fetchLocationError) {
      Alert.alert(
        "Oops...",
        "Could not fetch an approximate location. We'll center the map on Boston, MA. You can change that in your profile settings.",
        [{ text: "Ok, cool", onPress: goToHomeScreen }],
      )
    } else {
      goToHomeScreen()
    }
  }

  const listenerHandler = async (appState: AppStateStatus) => {
    if (appState === "active") {
      const res = await Permissions.check("location")
      if (res === "authorized") fetchLocation()
      else fetchApproximateLocation()
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
          "Couldn't open the settings app. If you're still interested, hop over there and allow location access. Let's just go to the home screen for now.",
          [{ text: "Ok, cool", onPress: fetchApproximateLocation }],
        )
      })
    }
  }

  const confirmationAlert = () => {
    Alert.alert(
      "Are you sure?",
      "Remember you can change this on the settings app at anytime.",
      [
        { text: "Not now", onPress: fetchApproximateLocation },
        { text: "Open settings", onPress: handleOpenSettings },
      ],
    )
  }

  const requestLocationPermission = () => {
    Permissions.request("location").then((res) => {
      switch (res) {
        case "authorized":
          fetchLocation()
          break
        case "denied":
          confirmationAlert()
          break
        default:
          fetchApproximateLocation()
      }
    })
  }

  const encouragementAlert = () => {
    Alert.alert(
      "Come on",
      "You'll miss out on the best experience Flare has to offer!",
      [
        { text: "Not now", onPress: fetchApproximateLocation },
        { text: "Ok, fine", onPress: requestLocationPermission },
      ],
    )
  }

  useEffect(() => {
    const blockAndroidBackButtonTap = () => true
    BackHandler.addEventListener("hardwareBackPress", blockAndroidBackButtonTap)

    return function cleanup() {
      AppState.removeEventListener("change", listenerHandler)
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
      <MessageTitle>Real quick...</MessageTitle>
      <Message>{message}</Message>
      <ButtonsContainer>
        <LaterButton onPress={encouragementAlert} />
        <AllowButton onPress={requestLocationPermission} />
      </ButtonsContainer>
      <LoadingModal visible={loading} />
    </Page>
  )
}

export default InformativePage
