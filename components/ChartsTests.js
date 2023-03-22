import * as WebBrowser from "expo-web-browser";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
// import { LineChart } from "react-native-chart-kit";
import { LinearGradient } from "expo-linear-gradient";

import Colors from "../constants/Colors";
import { MonoText } from "./StyledText";
import { Text, View } from "./Themed";
import styled from "styled-components";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function ChartTests({ title, value, sign }) {
  return (
    <LinearGradient colors={["#F5F5F5", "gray", "#F5F5F5"]}>
      <Container>
        <Title>{title}</Title>
        <Value>
          {sign}
          {value}
        </Value>
        <ShadowedView>
          <Curtain>
            {/*<LineChart*/}
            {/*  data={{*/}
            {/*    labels: [*/}
            {/*      "January",*/}
            {/*      "February",*/}
            {/*      "March",*/}
            {/*      "April",*/}
            {/*      "May",*/}
            {/*      "June",*/}
            {/*    ],*/}
            {/*    datasets: [*/}
            {/*      {*/}
            {/*        data: [*/}
            {/*          Math.random() * 100,*/}
            {/*          Math.random() * 100,*/}
            {/*          Math.random() * 100,*/}
            {/*          Math.random() * 100,*/}
            {/*          Math.random() * 100,*/}
            {/*          Math.random() * 100,*/}
            {/*        ],*/}
            {/*      },*/}
            {/*    ],*/}
            {/*  }}*/}
            {/*  width={Dimensions.get("window").width - 19}*/}
            {/*  height={150}*/}
            {/*  fromZero={true}*/}
            {/*  withVerticalLines={false}*/}
            {/*  withHorizontalLines={false}*/}
            {/*  yAxisLabel=""*/}
            {/*  yAxisSuffix=""*/}
            {/*  yAxisInterval={1} // optional, defaults to 1*/}
            {/*  chartConfig={{*/}
            {/*    showLabels: false,*/}
            {/*    labelColor: () => "black",*/}
            {/*    backgroundGradientFrom: "white",*/}
            {/*    propsForLabels: { display: "none" },*/}
            {/*    backgroundGradientTo: "white",*/}
            {/*    backgroundGradientFromOpacity: 1,*/}
            {/*    color: (opacity = 1) => `transparent`,*/}
            {/*    strokeWidth: 2, // optional, default 3*/}
            {/*    barPercentage: 0.5,*/}
            {/*    useShadowColorFromDataset: true, // optional*/}
            {/*    decimalPlaces: 2, // optional, defaults to 2dp*/}
            {/*    gradient: true,*/}
            {/*    style: {*/}
            {/*      borderRadius: 100,*/}
            {/*    },*/}
            {/*    propsForDots: {*/}
            {/*      r: "0",*/}
            {/*      strokeWidth: "0",*/}
            {/*      stroke: "#ffa726",*/}
            {/*    },*/}
            {/*  }}*/}
            {/*  bezier*/}
            {/*  style={{*/}
            {/*    marginVertical: -30,*/}
            {/*    marginHorizontal: -28,*/}
            {/*    borderRadius: 40,*/}
            {/*  }}*/}
            {/*/>*/}
            <LineChart width={400} height={400} data={data}>
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            </LineChart>
          </Curtain>
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
`;

const ShadowedView = styled.View`
  padding: 2%;
  height: 20%;
  border-radius: 40px;
  border-bottom-width: 40px;
  border-bottom-color: #f5f5f5;
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

const Curtain = styled.View`
  //overflow: hidden;
  background-color: navy;
  width: 120%;
`;
