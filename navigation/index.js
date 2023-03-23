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
import { useState } from "react";
import { useAuth } from "../contexts/authContext";
import styled from "styled-components";
import { OctupMenu } from "../components/OctupMenu";

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
    // <Backdrop
    //   revealed={revealed}
    //   header={
    //     <AppBar
    //       title="Apricoat"
    //       color="#504B5A"
    //       contentContainerStyle={{
    //         backgroundColor: "#504B5A",
    //       }}
    //       leading={(props) => (
    //         <OctupLogo onPress={() => setRevealed(!revealed)} color={"red"} />
    //       )}
    //     />
    //   }
    //   backLayer={
    //     <View
    //       style={{
    //         height: 2000,
    //         width: 50,
    //         backgroundColor: "#504B5A",
    //         position: "absolute",
    //       }}
    //     ></View>
    //   }
    // >
    <>
      <OctupMenu />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Root" component={BottomTabNavigator} />
        <Stack.Screen
          name="NotFound"
          component={NotFoundScreen}
          options={{ title: "Oops!" }}
        />
      </Stack.Navigator>
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

const StyledText = styled.Text``;
