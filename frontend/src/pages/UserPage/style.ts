import styled from "styled-components";

export const BodyContainerHome = styled.body<{ dark?: boolean }>`
  background-color: ${(props) => (props.dark ? "var(--black)" : "white")};
  border: 1px solid transparent;
  font-family: "Open sans", sans-serif;
`;

export const MainContainerUserProfile = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem;

  @media (min-width: 768px) {
    padding: 1.7rem 8rem;
  }
`;

export const Divanucios = styled.div<{ dark?: boolean }>`
  > h2 {
    color: ${(props) => (props.dark ? "var(--light-gray)" : "var(--black)")};
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    padding: 2rem 0;
    > h2 {
      font-size: 1.4rem;
    }
  }
`;

export const ListCardUserPage = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  overflow-x: auto;

  padding-top: 0.7rem;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    width: 100%;
    overflow-x: visible;
  }
`;
