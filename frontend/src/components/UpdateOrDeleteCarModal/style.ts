import styled from "styled-components";

export const CarStatusField = styled.div<{ dark: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 0.5rem;

  > input {
    display: none;
  }

  > label {
    background: var(--black);
    padding: 0.8rem;
    width: 100%;
    color: var(--white);
    font-size: 0.9rem;
    font-weight: 600;
    transition: 0.2s ease;
    border-radius: 8px;
    cursor: pointer;

    /* &:hover {
      background: var(--primary-color-hover);
      color: var(--white);
    } */
  }
`;

export const UpdateButtonsContainer = styled.div<{ dark: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0.3rem;

  > button {
    background: ${(props) =>
      props.dark ? "var(--primary-color)" : "var(--secondary-color)"};
    padding: 0.8rem;
    width: 49%;
    color: var(--white);
    font-size: 0.9rem;
    font-weight: 600;
    transition: 0.2s ease;

    &:hover {
      background: var(--primary-color-hover);
      color: var(--white);
    }
  }

  > .cancel {
    background-color: var(--light-gray);
    height: 100%;

    &:hover {
      background-color: var(--black);
    }
  }
`;

export const GoodPriceAnotation = styled.p`
  color: var(--light-gray);
  font-size: 0.5rem;
  letter-spacing: 0.04rem;
  transition: 0.4s ease;
  position: absolute;
  bottom: -15px;
  left: 1.5rem;

  @media (width < 485px) {
    bottom: -28px;
  }
`;
