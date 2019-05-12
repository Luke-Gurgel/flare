import React from "react"
import { ScrollView } from "react-native"
import { Page } from "./styled"
import PageHeader from "./PageHeader"
import { NavigationProps } from "src/types/index"
import pageArray from "./page-array"

const AppIntro = ({ navigation }: NavigationProps) => {
  const goBack = () => {
    navigation.goBack && navigation.goBack()
  }

  return (
    <Page>
      <PageHeader goBack={goBack} />
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator
        pinchGestureEnabled={false}
      >
        {pageArray}
      </ScrollView>
    </Page>
  )
}

export default AppIntro
