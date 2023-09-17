import { styled } from "styled-components";

export const FooterContainer = styled.footer<{ dark: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0.7rem;
  height: 10vh;

  padding: 0rem 2rem;

  background: transparent;
  backdrop-filter: blur(10px);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  > h3,
  p {
    color: ${(props) => (props.dark ? "var(--white)" : "var(--black)")};
  }

  > h3 {
    font-size: 1rem;
  }

  > p {
    font-size: 0.7rem;
  }

  @media (min-width: 768px) {
    gap: 2rem;

    > h3 {
      font-size: 1.4rem;
    }

    > p {
      font-size: 0.8rem;
    }
  }
`;

export const ButtonToBeginning = styled.a<{ dark: boolean }>`
  color: ${(props) => (props.dark ? "var(--white)" : "var(--black)")};

  font-size: 1.7rem;
`;
