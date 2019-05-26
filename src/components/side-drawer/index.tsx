import React from "react"
import { SideDrawerContainer } from "./styled"
import DrawerHeader from "./header"
import DrawerItems from "./item-list"

const SideDrawer = () => {
  return (
    <SideDrawerContainer>
      <DrawerHeader />
      <DrawerItems />
    </SideDrawerContainer>
  )
}

export default SideDrawer
