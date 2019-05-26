import styled from "styled-components/native"
import { width } from "src/utils/device"
import { ThemeProps } from "src/types"

const profilePictureSize = width / 4

export const ProfilePicture = styled.Image`
  width: ${profilePictureSize};
  height: ${profilePictureSize};
  border-radius: ${profilePictureSize / 2};
`

export const UserName = styled.Text<ThemeProps>`
  color: ${(props) => props.theme.textPrimary};
  font-size: 25px;
  text-align: left;
  font-weight: 800;
  margin-top: 15px;
`

export const UserEmail = styled.Text<ThemeProps>`
  color: ${(props) => props.theme.textSecondary};
  font-size: 16px;
  text-align: left;
  margin-top: 5px;
`
