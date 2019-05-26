import React from "react"
import { SafeAreaView } from "react-native"
import { connect } from "react-redux"
import Item from "./Item"
import { ItemListContainer } from "./styled"
import { InitialState } from "src/redux/initialState"

interface MapStateProps {
  items: { title: string; iconName: string }[]
}

const DrawerItems = ({ items }: MapStateProps) => {
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

const mapState = (state: InitialState): MapStateProps => ({
  items: state.sideDrawer.items,
})

export default connect(mapState)(DrawerItems)
