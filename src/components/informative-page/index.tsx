import React from "react"
import { TouchableOpacity } from "react-native"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import {
  Page,
  SoftButtonView,
  SoftButtonText,
} from "src/components/common/index"
import {
  ImageContainer,
  MessageTitle,
  Message,
  ButtonsContainer,
} from "./styled"
import message from "./message"

const AllowButton = ({ onPress }: { onPress: () => void }) => (
  <SoftButtonView onPress={onPress}>
    <SoftButtonText>Allow</SoftButtonText>
  </SoftButtonView>
)

const LaterButton = ({ onPress }: { onPress: () => void }) => (
  <TouchableOpacity onPress={onPress}>
    <SoftButtonText color="#777">Later</SoftButtonText>
  </TouchableOpacity>
)

const InformativePage = () => {
  return (
    <Page>
      <ImageContainer>
        <FontAwesome5 name={"gripfire"} size={180} color={"#39F3BB"} />
      </ImageContainer>
      <MessageTitle>Real quick...</MessageTitle>
      <Message>{message}</Message>
      <ButtonsContainer>
        <LaterButton onPress={() => {}} />
        <AllowButton onPress={() => {}} />
      </ButtonsContainer>
    </Page>
  )
}

export default InformativePage
