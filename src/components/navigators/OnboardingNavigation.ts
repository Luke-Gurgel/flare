import { createStackNavigator, createAppContainer } from "react-navigation"
import Landing from "../landing/index"
import AppIntro from "../app-intro/index"

const LandingNavigator = createStackNavigator(
  { landing: Landing, appIntro: AppIntro },
  { initialRouteName: "landing", headerMode: "none" },
)

const OnboardingNavigator = createAppContainer(LandingNavigator)
export default OnboardingNavigator
