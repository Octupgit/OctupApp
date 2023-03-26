import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import NotFoundScreen from "../screens/NotFoundScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import { LoginScreen } from "../screens/LoginScreen";
import { useAuth } from "../contexts/authContext";
import styled from "styled-components";
import { OctupSideMenu } from "../components/OctupSideMenu";
import { AppBar } from "@react-native-material/core";
import { octupTheme } from "../theme/octup-theme";
import { OctupLogo } from "../assets/svgs/octup-logo";
import { OpenMenuIcon } from "../assets/svgs/open-menu-icon";
import { useState } from "react";

export default function Navigation({ colorScheme }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

const AppStack = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <OctupSideMenu openMenu={openMenu}>
        <AppBar
          leading={() => {
            return (
              <LogoContainer>
                <OctupLogo />
              </LogoContainer>
            );
          }}
          trailing={() => {
            return (
              <LogoContainer>
                <OpenMenuIcon onPress={() => setOpenMenu(!openMenu)} />
              </LogoContainer>
            );
          }}
          style={{ height: "10%" }}
          color={octupTheme.colors.text}
        />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Root" component={BottomTabNavigator} />
          <Stack.Screen
            name="NotFound"
            component={NotFoundScreen}
            options={{ title: "Oops!" }}
          />
        </Stack.Navigator>
      </OctupSideMenu>
    </>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Sign In Screen" component={LoginScreen} />
    </Stack.Navigator>
  );
};

function RootNavigator() {
  const context = useAuth();

  return context?.authData?.token ? <AppStack /> : <AuthStack />;
}

const LogoContainer = styled.View`
  top: 40%;
`;
