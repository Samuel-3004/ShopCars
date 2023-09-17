import { useContext, ChangeEvent } from "react";
import Typography from "@material-ui/core/Typography";
import { RootContainer, StyledSlider } from "./style";
import { HomeContext } from "../../../providers/HomeProvider/HomeProvider";

const valuetext = (value: number) => {
  return `${value} km`;
};

export const RangeKMSlider = () => {
  const { valueKmCar, setValueKmCar } = useContext(HomeContext);

  let darkMode: boolean | null = JSON.parse(
    localStorage.getItem("@darkMode") || "null"
  );
  
  darkMode !== true ? darkMode = false : darkMode = true

  const handleChange = (
    _event: ChangeEvent<object>,
    newValue: number | number[]
  ) => {
    setValueKmCar(newValue as number[]);
  };

  return (
    <RootContainer dark={darkMode!}>
      <Typography
        id="range-slider"
        gutterBottom
        style={{
          fontFamily: "Lexend, sans-serif",
          fontWeight: "bold",
          margin: "5px 0",
          fontSize: "16px",
        }}
      >
        KM
      </Typography>
      <StyledSlider
        value={valueKmCar}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        step={10000}
        max={650000}
        style={
          darkMode!
            ? {
                color: "var(--primary-color)",
              }
            : {
                color: "var(--secondary-color)",
              }
        }
      />
    </RootContainer>
  );
};
