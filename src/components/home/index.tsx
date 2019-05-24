import React from "react"
import { Page } from "./styled"
import MenuButton from "./MenuButton"
import Map from "./Map"

const Home = () => {
  return (
    <Page>
      <Map />
      <MenuButton onPress={() => {}} />
    </Page>
  )
}

export default Home
