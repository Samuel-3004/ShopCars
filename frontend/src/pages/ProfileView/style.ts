import { styled } from "styled-components";

export const BodyContainerHome = styled.body<{ dark?: boolean }>`
  background-color: ${(props) => (props.dark ? "var(--black)" : "var(--white)")};
  border: 1px solid transparent;
  font-family: "Open sans", sans-serif;
`;

export const MainContainerProfile = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem;
  margin-top: 4rem;

  @media (min-width: 768px) {
    padding: 1.7rem 8rem;

    margin-top: 1.4rem;
  }
`

export const CardListProfile = styled.ul`
  display: flex;
  gap: 1rem;
  overflow-x: auto;

  padding-top: .7rem;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    width: 100%;
    padding: 3rem 0;
    overflow-x: visible;
  }
`