import { Dimensions, Platform } from "react-native"

interface DeviceSize {
  width: number
  height: number
}

export const { height, width }: DeviceSize = Dimensions.get("window")
export const isSmallDevice: boolean = height < 650
export const isIphoneX: boolean =
  Platform.OS === "ios" && height === 812 && width === 375
