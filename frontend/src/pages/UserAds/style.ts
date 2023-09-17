import { styled } from "styled-components";

export const BodyContainerHome = styled.body<{ dark?: boolean }>`
  background-color: ${(props) => (props.dark ? "var(--black)" : "#f0f2f5")};
  border: 1px solid transparent;
  font-family: "Open sans", sans-serif;
`;

export const SectionProfileInfoComponent = styled.section<{ dark?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem;
  padding-top: 5rem;

  border-radius: 8px;

  > h2 {
    color: ${(props) => (props.dark ? "var(--light-gray)" : "var(--black)")};
    font-size: 0.8rem;
  }

  @media (min-width: 768px) {
    margin-top: 6rem;
    padding-top: 5rem;
    padding: 1.7rem 8rem;

    gap: 2.3rem;

    > p {
      font-size: 0.8rem;
    }

    > h2 {
      font-size: 1.2rem;
    }
  }
`;

export const UserDiv = styled.div<{ dark?: boolean }>`
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
      background: ${(props) =>
        props.dark ? "var(--primary-color)" : "var(--secondary-color)"};
      color: var(--white);
      font-size: 0.7rem;
      padding: 0.4rem;
      border-radius: 6px;
    }
  }
`;

export const SiglaUser = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  flex-shrink: 0;

  width: 50px;
  height: 50px;

  background: var(--yellow);

  color: var(--black);
  font-weight: 600;
`;

export const CardListUserAds = styled.ul`
  display: flex;
  gap: 1rem;
  overflow-x: auto;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    width: 100%;
    overflow-x: visible;
  }
`;

export const Shadow = styled.div<{ dark: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  padding: 2rem;

  background: ${(props) => (props.dark ? "var(--black)" : "#f0f2f5")};

  border-radius: 10px;

  > p {
    color: ${(props) => (props.dark ? "var(--light-gray)" : "var(--black)")};
    font-size: 0.7rem;
    line-height: 150%;
  }
`;
