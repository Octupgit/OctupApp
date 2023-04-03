import * as WebBrowser from "expo-web-browser";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { LinearGradient } from "expo-linear-gradient";

import styled from "styled-components";
import { octupTheme } from "../theme/octup-theme";
import { CustomLineChart } from "./GradientedLineChart";

export default function ChartTests({ title, value, sign }) {
  return (
    <Container>
      <LinearGradient
        colors={["#f5f5f5", "#D3D3D3", "#f5f5f5"]}
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
            <CustomLineChart
              color2={octupTheme.colors.primary}
              color1={octupTheme.colors.secondary}
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
              width={1.18 * Dimensions.get("window").width}
              height={140}
              fromZero={true}
              withVerticalLines={false}
              withHorizontalLines={false}
              yAxisLabel=""
              yAxisSuffix=""
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                showLabels: false,
                labelColor: () => "black",
                propsForLabels: { display: "none" },
                backgroundGradientFrom: `${octupTheme.colors.cardBackground}`,
                backgroundGradientTo: `${octupTheme.colors.cardBackground}`,
                backgroundGradientFromOpacity: 1,
                color: () => `url(#grad)`,
                strokeWidth: 2, // optional, default 3
                barPercentage: 0.5,
                useShadowColorFromDataset: true, // optional
                decimalPlaces: 2, // optional, defaults to 2dp
                gradient: true,
                style: {
                  borderRadius: 0,
                },
                propsForDots: {
                  r: "0",
                  strokeWidth: "0",
                  stroke: "#ffa726",
                },
              }}
              bezier
              style={{
                marginVertical: -35,
                marginHorizontal: -60,
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
  background-color: ${octupTheme.colors.cardBackground};
  width: 96%;
  height: 96%;
  left: 2%;
  border-radius: 20px;
  overflow: hidden;
`;

const ShadowedView = styled.View`
  padding: 2%;
  height: 20%;
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
