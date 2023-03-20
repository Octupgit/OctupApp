import styled from 'styled-components';

import ChartTests from "../components/ChartsTests";

export default function TabOneScreen() {
  return (
    <Container>
      <Title>Ben</Title>
      <Title>Tab One</Title>
      <Seperator/>
      <ChartTests/>
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

