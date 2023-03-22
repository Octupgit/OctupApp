import Svg, { Path } from "react-native-svg";

export const InsightsTabIcon = ({ color }) => {
  return (
    <Svg width={24} height={24} xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M9.6 17.538h4.8M10.2 20h3.6M8.4 15.076a6.154 6.154 0 0 1-2.127-3.088 6.304 6.304 0 0 1 .035-3.78A6.146 6.146 0 0 1 8.492 5.16 5.9 5.9 0 0 1 12 4c1.26 0 2.487.406 3.508 1.161a6.146 6.146 0 0 1 2.184 3.046 6.303 6.303 0 0 1 .035 3.781 6.154 6.154 0 0 1-2.127 3.088"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
