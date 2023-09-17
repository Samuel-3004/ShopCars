import { styled } from "styled-components";

export const SectionProfileInfoComponent = styled.section<{ dark: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem;

  padding-top: 5rem;

  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  border-radius: 8px;

  background: ${(props) => (props.dark ? "var(--black)" : "var(--white)")};

  > p {
    color: ${(props) => (props.dark ? "var(--light-gray)" : "var(--black)")};
    font-size: 0.7rem;
    line-height: 150%;
  }

  @media (min-width: 768px) {
    margin-top: 5rem;
    padding: 2rem;

    padding-top: 2rem;

    > p {
      font-size: 0.8rem;
    }
  }
`;

export const UserDiv = styled.div<{ dark: boolean }>`
  display: flex;
  gap: 0.4rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    > span:nth-child(1) {
      color: ${(props) => (props.dark ? "var(--light-gray)" : "var(--black)")};
      font-size: 0.9rem;
      font-weight: 600;
    }

    > span:nth-child(2) {
      background: ${(props) => (props.dark ? "var(--white)" : "#19c9b24a")};
      color: ${(props) =>
        props.dark ? "var(--primary-color)" : "var(--secondary-color)"};
      font-size: 0.7rem;
      padding: 0.4rem;
      border-radius: 6px;
    }
  }
`;

export const SiglaUser = styled.span`
  display: flex;
  align-items: center;

  border-radius: 50%;
  flex-shrink: 0;

  padding: 0.6rem 1.3rem;

  background: var(--yellow);

  color: var(--black);
  font-weight: 600;
`;

export const ButtonCreate = styled.button<{ dark: boolean }>`
  color: var(--white);
  border: 1px solid
    ${(props) =>
      props.dark ? "var(--primary-color)" : "var(--secondary-color)"};

  background: ${(props) =>
    props.dark ? "var(--primary-color)" : "var(--secondary-color)"};

  width: fit-content;

  padding: 0.6rem 1rem;

  transition: 0.2s ease;

  &:hover {
    background: ${(props) =>
      props.dark ? "var(--secondary-color)" : "var(--primary-color)"};
    border: 1px solid transparent;

    color: var(--white);
  }

  @media (min-width: 768px) {
    font-size: 1rem;

    padding: 0.8rem 1.2rem;
  }
`;
