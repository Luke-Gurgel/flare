import { Alert, Linking, AppState, AppStateStatus } from "react-native"

export const confirmationAlert = (
  negativeCallback: () => void,
  positiveCallback: () => void,
) => {
  Alert.alert(
    "You're missing out!",
    "But remember, you can change this on the settings app at anytime.",
    [
      { text: "Not now", onPress: negativeCallback },
      { text: "Open settings app", onPress: positiveCallback },
    ],
  )
}

export const openSettingsApp = (
  listenerHandler: (state: AppStateStatus) => void,
) => {
  AppState.addEventListener("change", listenerHandler)
  Linking.openURL("app-settings:")
}

export const getApproximateLocation = (callback: () => void) => {
  // fetch it using 3rd party service
  console.log("fetching approximate location")
  callback()
}
