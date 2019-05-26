import React from "react"
import { SafeAreaView } from "react-native"
import Item from "./Item"
import { ItemListContainer } from "./styled"

const items = [
  { title: "Home", iconName: "home" },
  { title: "Profile", iconName: "person" },
  { title: "Dashboard", iconName: "dashboard" },
  { title: "Settings", iconName: "settings" },
  { title: "Help", iconName: "help" },
]

const DrawerItems = () => {
  return (
    <SafeAreaView>
      <ItemListContainer bounces={false}>
        {items.map((item) => (
          <Item
            itemTitle={item.title}
            iconName={item.iconName}
            key={item.title}
          />
        ))}
      </ItemListContainer>
    </SafeAreaView>
  )
}

export default DrawerItems
