import React from "react"
import { Page } from "./styled"
import MenuButton from "./MenuButton"
import Map from "./Map"
import { NavigationScreenProps } from "react-navigation"

const Home = ({ navigation }: NavigationScreenProps) => {
  const openDrawer = () => {
    navigation.openDrawer()
  }

  return (
    <Page>
      <Map />
      <MenuButton onPress={openDrawer} />
    </Page>
  )
}

export default Home
