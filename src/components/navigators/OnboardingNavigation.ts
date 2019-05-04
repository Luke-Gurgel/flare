import { createStackNavigator, createAppContainer } from "react-navigation"
import Landing from "../landing/index"

const LandingNavigator = createStackNavigator(
  { landing: Landing },
  { initialRouteName: "landing", headerMode: "none" },
)

const OnboardingNavigator = createAppContainer(LandingNavigator)
export default OnboardingNavigator
