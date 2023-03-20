import * as WebBrowser from "expo-web-browser";
import {Dimensions, StyleSheet, TouchableOpacity} from "react-native";
import { LineChart } from "react-native-chart-kit";

import Colors from "../constants/Colors";
import { MonoText } from "./StyledText";
import { Text, View } from "./Themed";
import styled from "styled-components";

export default function ChartTests({ title, value, sign }) {
  return (
    <ShadowedView>
      <Title>{title}</Title>
      <Value>{sign}{value}</Value>
      <LineChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100
              ]
            }
          ]
        }}
        width={Dimensions.get("window").width + 100} // from react-native
        height={180}
        fromZero={true}
        withVerticalLines={false}
        withHorizontalLines={false}
        yAxisLabel=""
        yAxisSuffix=""
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          showLabels: false,
          labelColor: ()=> 'transparent',
          backgroundGradientFrom: "white",
          backgroundGradientTo: "white",
          backgroundGradientFromOpacity: 1,
          color: (opacity = 1) => `#00A8A8`,
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
            stroke: "#ffa726"
          }
        }}
        bezier
        style={{
          marginVertical: 0,
          marginHorizontal: -60,
          borderRadius: 100
        }}
      />
    </ShadowedView>
  );
}

const ShadowedView = styled.View`
  padding: 4%;
  background-color: white;
  width: 100%;
  height: 20%;
  border-radius: 40px;
  shadow-color: black;
`;

const Title = styled.Text`
  font-size: 26px;
`
const Value = styled.Text`
  font-size: 40px;
`