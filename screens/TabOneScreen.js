import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";

import ChartTests from "../components/ChartsTests";
import { octupTheme } from "../theme/octup-theme";

export default function TabOneScreen() {
  return (
    <SafeArea>
      <Title>Hi, Ben</Title>
      <LinearGradient
        colors={["#f5f5f5", "#D3D3D3", "#f5f5f5"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Container>
          <Top>
            <ChartTests title={"roas"} value={0.6} sign={""} />
            <ChartTests title={"Average Order Value"} value={"47"} sign={"$"} />
            <ChartTests title={"Average Order Value"} value={"47"} sign={"$"} />
            <ChartTests title={"Average Order Value"} value={"47"} sign={"$"} />
          </Top>
        </Container>
      </LinearGradient>
    </SafeArea>
  );
}

const SafeArea = styled.SafeAreaView``;

const Container = styled.ScrollView`
  //align-items: center;
  //justify-content: center;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  line-height: 80px;
  background-color: ${octupTheme.colors.cardBackground};
`;

const Top = styled.View`
  height: 75%;
  width: 100%;
`;
