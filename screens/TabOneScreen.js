import styled from 'styled-components';
import { LinearGradient } from "expo-linear-gradient";

import ChartTests from "../components/ChartsTests";

export default function TabOneScreen() {
  return (
    <SafeArea>
      <Title>Hi, Ben</Title>
    <Container>
      <Top>
      <ChartTests title={'roas'} value={0.6} sign={''}/>
      <ChartTests title={'Average Order Value'} value={'47'} sign={'$'}/>
        <LinearGradient
          colors={['red', 'yellow', 'green' ]}
        />
        <ChartTests title={'Average Order Value'} value={'47'} sign={'$'}/>
        <LinearGradient
          colors={['red', 'yellow', 'green' ]}
        />
        <ChartTests title={'Average Order Value'} value={'47'} sign={'$'}/>
      </Top>
    </Container>
    </SafeArea>
  );
}

const SafeArea = styled.SafeAreaView`
`

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
  line-height: 80px;
  background-color: #F5F5F5;
`;

const Top = styled.View`
  height: 75%;
  width: 100%;
`;