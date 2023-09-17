import { styled } from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 9;
  padding: 0.7rem;
  background: transparent;
  backdrop-filter: blur(10px);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

export const DivHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  section {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  @media (min-width: 768px) {
    padding: 0rem 3.75rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1rem;

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 0rem;
  }
`;

export const ButtonHeader = styled.button<{ dark: boolean }>`
  background: none;
  border-radius: 6px;

  cursor: pointer;

  padding: 10px 20px;

  font-size: 0.7rem;
  font-weight: 600;
  color: ${(props) =>
    props.dark ? "var(--primary-color)" : "var(--secondary-color)"};

  transition: 0.2s ease;

  @media (min-width: 768px) {
    border: 1px solid
      ${(props) =>
        props.dark ? "var(--primary-color)" : "var(--secondary-color)"};
    font-size: 0.9rem;

    &:hover {
      border: 1px solid var(--white);
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

export const UserHeaderContainer = styled.div<{ dark: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  cursor: pointer;

  > span:nth-child(1) {
    background: ${(props) =>
      props.dark ? "var(--primary-color)" : "var(--secondary-color)"};

    color: var(--white);

    border-radius: 50%;

    padding: 0.4rem 0.7rem;

    transition: 0.2s ease;

    opacity: 1;

    z-index: 200;

    &:hover {
      background: var(--primary-color-hover);
      color: var(--white);
    }
  }

  > span:nth-child(2) {
    /* color: var(--white); */
    color: ${(props) => (props.dark ? "var(--white)" : "var(--black)")};

    font-size: 0.8rem;
  }
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

export const CustomHamburgerMenu = styled(GiHamburgerMenu)`
  color: var(--primary-color);
`;
