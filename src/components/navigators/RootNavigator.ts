import { createAppContainer, createStackNavigator } from "react-navigation"
import { zoomIn } from "react-navigation-transitions"
import OnboardingNavigator from "./OnboardingNavigator"
import Home from "../home/index"

const RootNavigator = createStackNavigator(
  { onboarding: OnboardingNavigator, home: Home },
  {
    transitionConfig: () => zoomIn(700),
    headerMode: "none",
    defaultNavigationOptions: {
      gesturesEnabled: false,
    },
  },
)

export default createAppContainer(RootNavigator)
