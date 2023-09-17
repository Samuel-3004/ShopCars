import { styled } from "styled-components";

export const BodyContainerHome = styled.body<{ dark?: boolean }>`
  background-color: ${(props) => (props.dark ? "var(--black)" : "#f0f2f5")};
  border: 1px solid transparent;
  font-family: "Open sans", sans-serif;
`;