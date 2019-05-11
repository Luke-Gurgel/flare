import React from "react"
import { Modal } from "react-native"
import Spinner from "react-native-spinkit"
import styled from "styled-components/native"

interface Props {
  visible: boolean
  onDismiss?: () => void
  animationType?: AnimationType
  spinnerType?: SpinnerType
  spinnerColor?: string
  spinnerSize?: number
}

type AnimationType = "none" | "slide" | "fade" | undefined
type SpinnerType =
  | "CircleFlip"
  | "Bounce"
  | "Wave"
  | "WanderingCubes"
  | "Pulse"
  | "ChasingDots"
  | "ThreeBounce"
  | "Circle"
  | "9CubeGrid"
  | "WordPress"
  | "FadingCircle"
  | "FadingCircleAlt"
  | "Arc"
  | "ArcAlt"

const Container = styled.View`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(100, 100, 100, 0.3);
`

const LoadingModal = (props: Props) => {
  return (
    <Modal
      transparent
      animationType={props.animationType}
      visible={props.visible}
      onDismiss={props.onDismiss}
    >
      <Container>
        <Spinner
          isVisible={props.visible}
          type={props.spinnerType}
          size={props.spinnerSize}
          color={props.spinnerColor}
        />
      </Container>
    </Modal>
  )
}

LoadingModal.defaultProps = {
  animationType: "fade",
  spinnerType: "Circle",
  spinnerColor: "#fff",
  spinnerSize: 80,
}

export default LoadingModal
