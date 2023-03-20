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
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const Seperator = styled.View`
  margin-vertical: 30%;
  background-color: navy;
  height: 1%;
  width: 100%;
`;

