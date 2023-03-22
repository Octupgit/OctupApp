// If you are not familiar with React Navigation, check out the "Fundamentals" guide:
// https://reactnavigation.org/docs/getting-started
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
import { useContext, useState } from "react";
import { useAuth } from "../contexts/authContext";
import {
  AppBar,
  Backdrop,
  BackdropSubheader,
} from "@react-native-material/core";
import { MetricsTabIcon } from "../assets/svgs/metrics-tab";
import { View } from "react-native";
import { OctupLogo } from "../assets/svgs/octup-logo";
import { octupTheme } from "../theme/octup-theme";
import styled from "styled-components";

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

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator();

const AppStack = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <Backdrop
      revealed={revealed}
      header={
        <AppBar
          title="Apricoat"
          color="#504B5A"
          contentContainerStyle={{
            backgroundColor: "#504B5A",
          }}
          leading={(props) => (
            <OctupLogo onPress={() => setRevealed(!revealed)} color={"red"} />
          )}
        />
      }
      backLayer={
        <View
          style={{
            height: 200,
            backgroundColor: "#504B5A",
          }}
        ></View>
      }
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Root" component={BottomTabNavigator} />
        <Stack.Screen
          name="NotFound"
          component={NotFoundScreen}
          options={{ title: "Oops!" }}
        />
      </Stack.Navigator>
    </Backdrop>
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

const StyledText = styled.Text``;
