import React from "react";
import PrimaryButton from "../../shared/styled_components/buttons/primary_button";
import { BackgroundContainer } from "../../shared/styled_components/containers/styles";
import { ImgLogo } from "../../shared/styled_components/icons/styles";
import { NavigationScreenProp } from "react-navigation";

interface IHomeScreenProps {
  navigation: NavigationScreenProp<any, any>;
}

const HomeScreen: React.FC<IHomeScreenProps> = ({ navigation }) => {
  return (
    <BackgroundContainer>
      <ImgLogo source={require("../../../assets/logo.png")} />
      <PrimaryButton
        label={"Cadastrar"}
        onPress={() => {
          navigation.navigate("Cadastrar");
        }}
      />
      <PrimaryButton label={"Visualizar"} onPress={() => {}} />
    </BackgroundContainer>
  );
};

export default HomeScreen;
