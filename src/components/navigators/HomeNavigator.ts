import { createDrawerNavigator } from "react-navigation"
import Home from "../home/index"

const HomeNavigator = createDrawerNavigator(
  { home: Home },
  { initialRouteName: "home" },
)

export default HomeNavigator
