import React from "react"
import { View, ScrollView } from "react-native"
import { NavigationProps } from "src/types/index"
import PageHeader from "./PageHeader"
import pageArray from "./page-array"

const AppIntro = ({ navigation }: NavigationProps) => {
  const goBack = () => {
    navigation.goBack && navigation.goBack()
  }

  return (
    <View style={{ flex: 1 }}>
      <PageHeader goBack={goBack} />
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator
        pinchGestureEnabled={false}
      >
        {pageArray}
      </ScrollView>
    </View>
  )
}

export default AppIntro
