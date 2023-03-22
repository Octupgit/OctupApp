import * as WebBrowser from "expo-web-browser";
import {Dimensions, StyleSheet, TouchableOpacity} from "react-native";
import { LineChart } from "react-native-chart-kit";
import { LinearGradient } from "expo-linear-gradient";

import Colors from "../constants/Colors";
import { MonoText } from "./StyledText";
import { Text, View } from "./Themed";
import styled from "styled-components";

export default function ChartTests({ title, value, sign }) {
  return (
      <LinearGradient
        colors={['#F5F5F5', 'gray', '#F5F5F5' ]}
      >
    <Container>
      <Title>{title}</Title>
      <Value>{sign}{value}</Value>
    <ShadowedView>
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
        width={Dimensions.get("window").width - 19}
        height={150}
        fromZero={true}
        withVerticalLines={false}
        withHorizontalLines={false}
        yAxisLabel=""
        yAxisSuffix=""
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          showLabels: false,
          labelColor: ()=> 'black',
          backgroundGradientFrom: "white",
          propsForLabels: {display: 'none'},
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
          marginVertical: -30,
          marginHorizontal: -28,
          borderRadius: 40
        }}
      />
    </ShadowedView>
    </Container>
        </LinearGradient>
  );
}

const Container = styled.View`
  padding: 4%;
  background-color: white;
  width: 96%;
  left: 2%;
  border-radius: 40px;
`

const ShadowedView = styled.View`
  padding: 2%;
  height: 20%;
  border-radius: 40px;
  border-bottom-width: 40px;
  border-bottom-color: #F5F5F5;
  shadow-opacity: 0.1;
`;

const Title = styled.Text`
  font-size: 26px;
  z-index: 10;
`
const Value = styled.Text`
  font-size: 40px;
  z-index: 10;
`