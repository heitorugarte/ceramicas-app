import React from "react";
import PrimaryButton from "../../shared/styled_components/buttons/primary_button";
import { BackgroundContainer } from "../../shared/styled_components/containers/styles";
import { ImgLogo } from "../../shared/styled_components/icons/styles";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <BackgroundContainer>
      <ImgLogo source={require("../../../assets/logo.png")} />
      <PrimaryButton
        label={"Cadastrar"}
        onPress={() => {
          navigation.navigate("Cadastrar");
        }}
      />
      <PrimaryButton
        label={"Visualizar"}
        onPress={() => {
          navigation.navigate("Visualizar");
        }}
      />
    </BackgroundContainer>
  );
};

export default HomeScreen;
