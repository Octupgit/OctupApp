import styled from 'styled-components';

import ChartTests from "../components/ChartsTests";

export default function TabOneScreen() {
  return (
    <Container>
      <Title>Ben</Title>
      <Title>Tab One</Title>
      <Top>
      <ChartTests title={'roas'} value={0.6} sign={''}/>
        <Seperator />
      <ChartTests title={'Average Order Value'} value={'47'} sign={'$'}/>
        <Seperator />
        <ChartTests title={'Average Order Value'} value={'47'} sign={'$'}/>
        <Seperator />
        <ChartTests title={'Average Order Value'} value={'47'} sign={'$'}/>
      </Top>
    </Container>
  );
}

const Container = styled.ScrollView`
  //align-items: center;
  //justify-content: center;
  background-color: #F5F5F5;
`;

// const Container = styled.View`
//   flex: 1;
//   //align-items: center;
//   //justify-content: center;
//   background-color: #F5F5F5;
// `;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const Seperator = styled.View`
  height: 4%;
  width: 100%;
`;

const Top = styled.View`
  height: 100%;
  width: 100%;
`;