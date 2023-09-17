import styled from "styled-components";

export const FilterStyle = styled.div<{ dark?: boolean }>`
  width: 280px;
  padding: 10px;
  button {
    width: 230px;
    border-radius: 4px;
    color: var(--white);
    background-color: ${(props) =>
      props.dark ? "var(--primary-color)" : "var(--secondary-color)"};
    border: none;
    padding: 10px;
    font-family: "Lexend", sans-serif;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
