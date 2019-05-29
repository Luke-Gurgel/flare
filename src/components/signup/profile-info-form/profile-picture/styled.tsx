import styled from "styled-components/native"
import { width } from "src/utils/device"

const profilePictureSize = width / 3.5

export const ProfilePictureRow = styled.View`
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-top: 40px;
`

export const ProfilePictureContainer = styled.View`
  width: ${profilePictureSize};
  height: ${profilePictureSize};
  background-color: white;
  border-radius: 4px;
  shadow-color: rgb(150, 150, 150);
  shadow-offset: ${"2px 2px"};
  shadow-opacity: 0.3;
  shadow-radius: 5;
  elevation: 1;
`

export const ProfilePicture = styled.Image.attrs({
  resizeMode: "center",
})`
  flex-grow: 1;
`

export const PickProfilePictureButtonText = styled.Text`
  font-size: 15px;
  font-weight: 600;
  text-align: left;
  margin-top: 12px;
`
