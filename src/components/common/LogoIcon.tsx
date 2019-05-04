import React from "react"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

interface Props {
  size: number
}

const LogoIcon = ({ size }: Props) => (
  <FontAwesome5 name={"gripfire"} size={size} color="#39F3BB" />
)

export default LogoIcon
