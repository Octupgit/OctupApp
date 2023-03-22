import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";

import ChartTests from "../components/ChartsTests";
import { octupTheme } from "../theme/octup-theme";
import {
  AppBar,
  Backdrop,
  BackdropSubheader,
  Icon,
  IconButton,
} from "@react-native-material/core";
import { View } from "react-native";

export default function TabOneScreen() {
  return (
    <>
      <TitleContainer>
        <Title>Hi, Ben</Title>
      </TitleContainer>
      <LinearGradient
        colors={["#f5f5f5", "#D3D3D3", "#f5f5f5"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <SafeArea>
          <Container>
            <Top>
              <ChartTests title={"ROAS"} value={0.6} sign={""} />
              <ChartTests
                title={"Average Order Value"}
                value={"47"}
                sign={"$"}
              />
              <ChartTests title={"ROAS"} value={0.6} sign={""} />
              <ChartTests
                title={"Average Order Value"}
                value={"47"}
                sign={"$"}
              />
              <ChartTests
                title={"Average Order Value"}
                value={"47"}
                sign={"$"}
              />
            </Top>
          </Container>
        </SafeArea>
      </LinearGradient>
    </>
  );
}

const SafeArea = styled.SafeAreaView``;

const Container = styled.ScrollView``;

const TitleContainer = styled.View`
  width: 100%;
  height: 10%;
  background-color: ${octupTheme.colors.background};
`;

const Title = styled.Text`
  line-height: 100px;
  font-size: 20px;
  font-weight: bold;
`;

const Top = styled.View`
  height: 58%;
  width: 100%;
`;
