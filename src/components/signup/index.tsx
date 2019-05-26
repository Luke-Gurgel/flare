import React from "react"
import { StatusBar } from "react-native"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { Page, PageHeader } from "src/components/common/index"
import { PageTitle, Message, Description } from "./styled"
import SignupForm from "./SignupForm"
import { NavigationScreenProps } from "react-navigation"

const Signup = ({ navigation }: NavigationScreenProps) => {
  const comingFromLanding = navigation.getParam("comingFromLanding", false)

  const goBack = () => {
    comingFromLanding ? navigation.dismiss() : navigation.goBack()
  }

  return (
    <Page>
      <KeyboardAwareScrollView scrollEnabled={false}>
        <StatusBar barStyle="default" />
        <PageHeader
          goBack={goBack}
          dismissButtonType={comingFromLanding ? "close" : "back"}
          centerComponent={<PageTitle>Sign up</PageTitle>}
        />
        <Message>Create an account</Message>
        <Description>In order to post tasks or apply to them</Description>
        <SignupForm />
      </KeyboardAwareScrollView>
    </Page>
  )
}

export default Signup
