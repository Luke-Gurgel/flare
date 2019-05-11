import React from "react"
import { StatusBar } from "react-native"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { Page, PageHeader } from "src/components/common/index"
import { PageTitle, Message, Description } from "./styled"
import SignupForm from "./SignupForm"
import { NavigationProps } from "src/types/index"

const Signup = ({ navigation }: NavigationProps) => {
  const comingFromLanding =
    navigation.getParam && navigation.getParam("comingFromLanding", false)

  const goBack = () => {
    comingFromLanding
      ? navigation.dismiss && navigation.dismiss()
      : navigation.goBack && navigation.goBack()
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
