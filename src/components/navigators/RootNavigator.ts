import { createAppContainer, createStackNavigator } from "react-navigation"
import { zoomIn } from "react-navigation-transitions"
import OnboardingNavigator from "./OnboardingNavigator"
import HomeNavigator from "./HomeNavigator"

const RootNavigator = createStackNavigator(
  { onboarding: OnboardingNavigator, home: HomeNavigator },
  {
    transitionConfig: () => zoomIn(700),
    headerMode: "none",
    defaultNavigationOptions: {
      gesturesEnabled: false,
    },
  },
)

export default createAppContainer(RootNavigator)
