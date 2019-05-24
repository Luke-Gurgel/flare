import { Platform } from "react-native"
import MapView from "react-native-maps"
import styled from "styled-components/native"
import { width, height, isIphoneX } from "src/utils/device"

export const Page = styled.View`
  flex-grow: 1;
  width: ${width};
  height: ${height};
`

const menuButtonTopMargin = Platform.select({
  ios: isIphoneX ? 60 : 30,
  android: 10,
})

export const MenuButtonContainer = styled.TouchableOpacity`
  margin-top: ${menuButtonTopMargin};
  margin-left: 20px;
  position: absolute;
`

export const StyledMap = styled(MapView)`
  flex-grow: 1;
  width: ${width};
  height: ${height};
`
