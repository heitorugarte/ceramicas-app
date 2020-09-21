import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/home_screen";
import CadastrarScreen from "./src/screens/cadastrar_screen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name={"Home"}
          component={HomeScreen}
          options={{
            title: "Cerâmicas",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={"Cadastrar"}
          component={CadastrarScreen}
          options={{
            title: "Cadastrar Peças",
            headerTitleStyle: { textAlign: "right" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
