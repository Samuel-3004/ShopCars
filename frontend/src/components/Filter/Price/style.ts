import styled from "styled-components";
import Slider from "@material-ui/core/Slider";

export const RootContainer = styled.div<{ dark?: boolean }>`
  color: ${(props) =>
    props.dark ? "var(--primary-color)" : "var(--secondary-color)"};
  width: 240px;
`;

export const StyledSlider = styled(Slider)<{ dark?: boolean }>`
  .MuiSlider-valueLabel {
    font-size: 9px;
    color: ${(props) =>
      props.dark ? "var(--primary-color)" : "var(--secondary-color)"};

    /* color: var(--gray); */
  }
`;
