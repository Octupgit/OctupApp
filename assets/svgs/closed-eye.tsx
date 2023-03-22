import Svg, { Path } from "react-native-svg";

export const ClosedEyeLogo = ({ onPress }) => {
  return (
    <Svg
      onPress={() => onPress()}
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="m18.097 10.588 1.9 2.798M14.185 12.143 14.777 15M9.817 12.142l-.593 2.857M5.909 10.586 4 13.397M4.01 9c1.4 1.474 3.966 3.337 7.995 3.337C16.033 12.337 18.6 10.474 20 9"
        stroke="#504B5A"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
