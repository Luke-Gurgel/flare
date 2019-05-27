import React from "react"
import { TouchableOpacity } from "react-native"
import {
  ProfilePictureRow,
  ProfilePictureContainer,
  ProfilePicture,
  PickProfilePictureButtonText,
} from "./styled"

const profilePicturePlaceholderUrl =
  "https://img.icons8.com/nolan/512/000000/administrator-male.png"

const ProfilePicturePicker = () => {
  return (
    <ProfilePictureRow>
      <ProfilePictureContainer>
        <ProfilePicture source={{ uri: profilePicturePlaceholderUrl }} />
      </ProfilePictureContainer>
      <TouchableOpacity onPress={() => {}}>
        <PickProfilePictureButtonText>
          Pick a profile picture
        </PickProfilePictureButtonText>
      </TouchableOpacity>
    </ProfilePictureRow>
  )
}

export default ProfilePicturePicker
