import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
} from "react-native";
import { octupTheme } from "../theme/octup-theme";
import styled from "styled-components";

export const OctupSideMenu = (props) => {
  const drawer = useRef<DrawerLayoutAndroid>(props.openMenu);
  const [drawerPosition, setDrawerPosition] = useState<"left" | "right">(
    "right"
  );

  const changeDrawerPosition = () => {
    if (drawerPosition === "left") {
      setDrawerPosition("right");
    } else {
      setDrawerPosition("left");
    }
  };

  useEffect(() => {
    props.openMenu
      ? drawer?.current?.openDrawer()
      : drawer?.current?.closeDrawer();
  }, [props.openMenu]);

  const navigationView = () => (
    <SideWays>
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current?.closeDrawer()}
      />
    </SideWays>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}
    >
      {props.children}
    </DrawerLayoutAndroid>
  );
};

const SideWays = styled.View`
  background-color: ${octupTheme.colors.text};
  height: 100%;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1",
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center",
  },
});
