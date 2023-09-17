import styled from "styled-components";
import Slider from "@material-ui/core/Slider";

export const RootContainer = styled.div<{ dark?: boolean }>`
  width: 240px;

  color: ${(props) =>
    props.dark ? "var(--primary-color)" : "var(--secondary-color)"};
`;

export const StyledSlider = styled(Slider)`
  .MuiSlider-valueLabel {
    color: var(--gray);
    font-size: 9px;
  }
`;
