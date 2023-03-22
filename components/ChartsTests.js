import * as WebBrowser from "expo-web-browser";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { LinearGradient } from "expo-linear-gradient";

import Colors from "../constants/Colors";
import { MonoText } from "./StyledText";
import { Text, View } from "./Themed";
import styled from "styled-components";
import { octupTheme } from "../theme/octup-theme";

export default function ChartTests({ title, value, sign }) {
  return (
    <Container>
      <LinearGradient
        colors={["#F5F5F5", "gray", "#D3D3D3"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0.2 }}
      >
        <LinearContainer>
          <Title>{title}</Title>
          <Value>
            {sign}
            {value}
          </Value>
          <ShadowedView>
            <LineChart
              data={{
                labels: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                ],
                datasets: [
                  {
                    data: [
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                    ],
                  },
                ],
              }}
              width={Dimensions.get("window").width}
              height={150}
              fromZero={true}
              withVerticalLines={false}
              withHorizontalLines={false}
              yAxisLabel=""
              yAxisSuffix=""
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                showLabels: false,
                labelColor: () => "black",
                backgroundGradientFrom: `${octupTheme.colors.background}`,
                propsForLabels: { display: "none" },
                backgroundGradientTo: `${octupTheme.colors.background}`,
                backgroundGradientFromOpacity: 1,
                color: () => `${octupTheme.colors.primary}`,
                strokeWidth: 2, // optional, default 3
                barPercentage: 0.5,
                useShadowColorFromDataset: true, // optional
                decimalPlaces: 2, // optional, defaults to 2dp
                gradient: true,
                style: {
                  borderRadius: 100,
                },
                propsForDots: {
                  r: "0",
                  strokeWidth: "0",
                  stroke: "#ffa726",
                },
              }}
              bezier
              style={{
                marginVertical: -30,
                marginHorizontal: -28,
                borderRadius: 40,
              }}
            />
          </ShadowedView>
        </LinearContainer>
      </LinearGradient>
    </Container>
  );
}

const Container = styled.View`
  height: 35%;
`;

const LinearContainer = styled.View`
  padding: 3%;
  background-color: ${octupTheme.colors.background};
  width: 96%;
  height: 98%;
  left: 2%;
  border-radius: 40px;
  overflow: hidden;
`;

const ShadowedView = styled.View`
  padding: 2%;
  height: 20%;
  border-radius: 40px;
  border-bottom-width: 40px;
  border-bottom-color: ${octupTheme.colors.background};
  shadow-opacity: 0.1;
`;

const Title = styled.Text`
  font-size: 26px;
  z-index: 10;
`;
const Value = styled.Text`
  font-size: 40px;
  z-index: 10;
`;
