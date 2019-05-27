import { createStackNavigator } from "react-navigation"
import Landing from "../landing/index"
import AppIntro from "../app-intro/index"
import Login from "../login/index"
import Signup from "../signup/index"
import ProfileInfoForm from "../signup/profile-info-form"
import InformativePage from "../informative-page/index"

const LandingNavigator = createStackNavigator(
  { landing: Landing, appIntro: AppIntro },
  { initialRouteName: "landing", headerMode: "none" },
)

const AuthNavigator = createStackNavigator(
  {
    login: Login,
    signup: Signup,
    profileInfoForm: ProfileInfoForm,
    informativePage: InformativePage,
  },
  {
    headerMode: "none",
    defaultNavigationOptions: {
      gesturesEnabled: false,
    },
  },
)

const OnboardingNavigator = createStackNavigator(
  { landing: LandingNavigator, login: AuthNavigator },
  { mode: "modal", headerMode: "none" },
)

export default OnboardingNavigator
