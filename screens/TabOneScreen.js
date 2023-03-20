import { StyleSheet } from "react-native";
import styled from 'styled-components';

import ChartTest from "../components/EditScreenInfo";

export default function TabOneScreen() {
  return (
    <Container>
      <Title>Ben</Title>
      <Title>Tab One</Title>
      <Seperator/>
      <ChartTest path="/screens/TabOneScreen.tsx" />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: aquamarine;
`

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`

const Seperator = styled.View`
  margin-vertical: 30%;
  background-color: navy;
  height: 1%;
  width: 100%;
`

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  // title: {
  //   fontSize: 20,
  //   fontWeight: "bold",
  // },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
