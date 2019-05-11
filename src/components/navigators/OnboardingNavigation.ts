import { createStackNavigator, createAppContainer } from "react-navigation"
import Landing from "../landing/index"
import AppIntro from "../app-intro/index"
import Login from "../login/index"
import Signup from "../signup/index"

const LandingNavigator = createStackNavigator(
  { landing: Landing, appIntro: AppIntro },
  { initialRouteName: "landing", headerMode: "none" },
)

const AuthNavigator = createStackNavigator(
  { login: Login, signup: Signup },
  { headerMode: "none" },
)

const OnboardingNavigator = createStackNavigator(
  { landing: LandingNavigator, login: AuthNavigator },
  { mode: "modal", headerMode: "none" },
)

export default createAppContainer(OnboardingNavigator)
