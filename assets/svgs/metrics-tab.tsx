import Svg, { Path } from "react-native-svg";

export const MetricsTabIcon = ({ color }) => {
  return (
    <Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M13.6 8.718v10.038a.656.656 0 0 0 .285.54l.88.595a.633.633 0 0 0 .834-.11.652.652 0 0 0 .141-.273l1.06-4.299"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.8 15.21c.849 0 1.663-.343 2.263-.951.6-.61.937-1.435.937-2.295 0-.861-.337-1.687-.937-2.295a3.177 3.177 0 0 0-2.263-.95h-3.2s-4.356 0-8.548-3.567A.636.636 0 0 0 4.1 5.3a.656.656 0 0 0-.1.349v12.63a.656.656 0 0 0 .37.588.631.631 0 0 0 .682-.092c4.192-3.566 8.548-3.566 8.548-3.566h3.2Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
