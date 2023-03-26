import Svg, { Path } from "react-native-svg";

export const OpenMenuIcon = ({ onPress, color }) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onPress={() => onPress && onPress()}
    >
      <Path
        d="M8 6h12M8 18h12M4 12h16"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  );
};
