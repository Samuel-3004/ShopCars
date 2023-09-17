import { styled } from "styled-components";

export const DivHeader = styled.div<{ dark: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => (props.dark ? "var(--black)" : "#f0f2f5")};

  section {
    display: flex;
    gap: 20px;
    align-items: center;
  }
  
  @media (min-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1;
    
    width: 100%;
    padding: 1rem 3.75rem;

    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

export const Logo = styled.div<{ dark: boolean }>`
  display: flex;

  position: relative;

  > h2 {
    font-size: 2.1rem;
    font-family: "Anton", sans-serif;
    color: var(--primary-color);
  }

  > span {
    position: absolute;
    top: 19px;
    right: -50px;

    color: ${(props) =>
      props.dark ? "var(--white)" : "var(--secondary-color)"};
    font-size: 1.9rem;
    font-family: "Galada", cursive;
  }
`;

export const ButtonHeader = styled.button<{ dark: boolean }>`
  background: none;
  border-radius: 6px;
  
  cursor: pointer;
  
  padding: 10px 20px;

  font-size: .7rem;
  font-weight: 600;
  color: ${(props) =>
    props.dark ? "var(--primary-color)" : "var(--secondary-color)"};

  transition: .2s ease;

  @media (min-width: 768px) {
    border: 1px solid ${(props) =>
        props.dark ? "var(--primary-color)" : "var(--secondary-color)"};
    font-size: .9rem;

    &:hover {
      border: 1px solid ${(props) =>
    props.dark ? "var(--primary-color)" : "var(--secondary-color)"};
      background: ${(props) =>
    props.dark ? "var(--primary-color)" : "var(--secondary-color)"};
      color: var(--white);
    }
  }
`;

export const MobileNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-end;
`;