import React from "react"
import { ScrollView } from "react-native"
import { Page, PageHeader, LogoIcon } from "src/components/common/index"
import { NavigationProps } from "src/types/index"
import pageArray from "./page-array"

const AppIntro = ({ navigation }: NavigationProps) => {
  const goBack = () => {
    navigation.goBack && navigation.goBack()
  }

  return (
    <Page>
      <PageHeader
        goBack={goBack}
        dismissButtonType="back"
        centerComponent={<LogoIcon size={35} />}
      />
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
