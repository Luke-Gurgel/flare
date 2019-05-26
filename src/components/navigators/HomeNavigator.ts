import { createAppContainer, createDrawerNavigator } from "react-navigation"
import Home from "../home/index"
import SideDrawer from "../side-drawer"

const HomeNavigator = createDrawerNavigator(
  { home: Home },
  { initialRouteName: "home", contentComponent: SideDrawer },
)

export default createAppContainer(HomeNavigator)
