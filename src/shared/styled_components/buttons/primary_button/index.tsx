import React from "react";
import { StyledTouchableOpacity } from "../styles";
import { PrimaryButtonText } from "./styles";

interface IPrimaryButtonProps {
  label: string;
  onPress: () => void;
}

const PrimaryButton: React.FC<IPrimaryButtonProps> = ({ label, onPress }) => {
  return (
    <StyledTouchableOpacity onPress={onPress}>
      <PrimaryButtonText>{label}</PrimaryButtonText>
    </StyledTouchableOpacity>
  );
};

export default PrimaryButton;
