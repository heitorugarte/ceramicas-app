import { useNavigation } from "@react-navigation/native";
import React from "react";
import PrimaryButton from "../../shared/styled_components/buttons/primary_button";
import { BackgroundContainer } from "../../shared/styled_components/containers/styles";
import TextField from "../../shared/styled_components/forms/textInput";

const CadastrarScreen = () => {
  const navigation = useNavigation();
  return (
    <BackgroundContainer>
      <TextField placeholder="Placeholder teste..." onChangeText={() => {}} />
      <PrimaryButton
        label="Cadastrar"
        onPress={() => navigation.navigate("Home")}
      />
    </BackgroundContainer>
  );
};

export default CadastrarScreen;
