import React from "react"
import { InputsRow, InputContainer, InputLabel, Input } from "./styled"

interface InputProps {
  label: string
  placeholder: string
}

const NameInput = ({ label, placeholder }: InputProps) => (
  <InputContainer>
    <InputLabel>{label}</InputLabel>
    <Input placeholder={placeholder} />
  </InputContainer>
)

const NameInputs = () => {
  return (
    <InputsRow>
      <NameInput label="First name" placeholder="John" />
      <NameInput label="Last name" placeholder="Doe" />
    </InputsRow>
  )
}

export default NameInputs
