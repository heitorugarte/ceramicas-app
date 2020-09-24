import React from "react";
import { StyledLabel, StyledTextInput, TextInputContainer } from "./styles";

interface ITextInput {
  label?: string;
  placeholder?: string;
  onChangeText?: Function;
  keyboardType?: string;
}

const TextField: React.FC<ITextInput> = ({
  label,
  placeholder,
  onChangeText,
  keyboardType,
}) => {
  return (
    <TextInputContainer>
      {label ? <StyledLabel>{label}</StyledLabel> : null}
      <StyledTextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </TextInputContainer>
  );
};

export default TextField;
