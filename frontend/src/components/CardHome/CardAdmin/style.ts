import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const CardContainer = styled.li<{ dark: boolean }>`
  display: flex;
  flex-direction: column;

  width: 244px;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  background: ${(props) => (props.dark ? "var(--black)" : "var(--white)")};

  border-radius: 12px;

  flex-shrink: 0;

  position: relative;

  ::-webkit-scrollbar {
    width: 3px; /* Largura da barra de rolagem vertical */
    height: 3px; /* Altura da barra de rolagem horizontal */
  }

  /* Para navegadores baseados em Chromium (Google Chrome, Microsoft Edge, etc.) */
  ::-webkit-scrollbar-thumb {
    background-color: var(
      --light-gray
    ); /* Cor do "polegar" da barra de rolagem (a parte que o usuário arrasta) */
    border-radius: 6px; /* Raio de borda para o "polegar" */
  }

  /* Para navegadores baseados em Chromium (Google Chrome, Microsoft Edge, etc.) */
  ::-webkit-scrollbar-thumb:hover {
    background-color: var(
      --light-gray
    ); /* Cor do "polegar" da barra de rolagem ao passar o mouse */
  }

  /* Para navegadores baseados em Firefox */
  /* Apenas para personalização básica */
  scrollbar-color: var(--light-gray) transparent;

  @media (min-width: 768px) {
    width: 262px;
    height: fit-content;
    max-height: fit-content;
  }
`;

export const FigureContainer = styled.figure`
  > img {
    width: 100%;
    height: 152px;

    object-fit: cover;

    border-radius: 12px 12px 0 0;
  }
`;

export const ContainerInfo = styled.div<{ dark?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  padding: 1rem;

  > h3 {
    font-size: 0.8rem;
    color: ${(props) =>
      props.dark ? "var(--primary-color)" : "var(--secondary-color)"};
  }

  > h3.truncated-title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  > p {
    font-size: 0.7rem;
    color: var(--white);
    height: 90px;
    line-height: 150%;
  }

  @media (min-width: 768px) {
    gap: 0.7rem;

    > h3 {
      font-size: 1rem;
    }

    > p {
      font-size: 0.8rem;
    }
  }
`;

export const ContactUserContainer = styled.div<{ dark?: boolean}>`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  span.name-car2 {
    color: ${(props) => (props.dark ? "var(--light-gray)" : "var(--black)" )};
  }

  :nth-child(1) {
    border-radius: 50%;

    background-color: var(--yellow);

    display: flex;
    align-items: center;
    justify-content: center;

    width: 26px;
    height: 26px;

    font-size: 0.7rem;

    color: var(--black);
  }

  :nth-child(2) {
    font-size: 0.7rem;
    color: var(--light-gray);
  }

  @media (min-width: 768px) {
    :nth-child(1),
    :nth-child(2) {
      font-size: 0.83rem;
    }
  }
`;

export const ContainerInfoCar = styled.div<{ dark?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    gap: 0.4rem;

    > span {
      background: ${(props) =>
        props.dark ? "var(--primary-color)" : "var(--secondary-color)"};

      border-radius: 6px;

      padding: 0.4rem;
      font-size: 0.7rem;
      color: var(--white);
      display: flex;
      align-items: center;

      @media (min-width: 768px) {
        font-size: 0.8rem;
      }
    }
  }

  > span {
    font-size: 0.9rem;
    font-weight: 700;

    color: ${(props) => (props.dark ? "var(--light-gray)" : "var(--black)")};
  }
`;

export const FlagGoodDeal = styled.div`
  display: flex;
  align-items: center;

  position: absolute;
  top: -10px;
  right: -10px;

  border-radius: 50%;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

  padding: 0.4rem;

  background: var(--alert-success);

  color: var(--white);
  font-size: 1.2rem;
`;

export const ButtonContainer = styled.div<{dark: boolean}>`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  > button {
    background: ${(props) =>
      props.dark ? "var(--black)" : "var(--white)"};

    padding: 0.4rem;

    border: 1px solid ${(props) =>
      props.dark ? "var(--primary-color)" : "var(--secondary-color)"};
    border-radius: 6px;

    transition: 0.2s ease;

    font-weight: 600;
    color: ${(props) =>
      props.dark ? "var(--primary-color)" : "var(--secondary-color)" };

    &:hover {
      background: var(--black);
      color: var(--white);
      border: 1px solid var(--black);
    }
  }
`;

export const LinkBtn = styled(Link)`
  background: var(--white);

  padding: 0.4rem;

  border: 1px solid var(--light-gray);
  border-radius: 6px;

  transition: 0.2s ease;

  font-weight: 600;
  color: var(--gray);

  &:hover {
    background: var(--black);
    color: var(--white);
    border: 1px solid var(--black);
  }
`;

export const DescriptionWithOverFlowAdm = styled.section<{ dark?: boolean }>`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  overflow: hidden;
  -webkit-box-orient: vertical;

  > p {
    font-size: 0.6rem;
    color: ${(props) => (props.dark ? "var(--white)" : "var(--black)")};
    height: 50px;
    line-height: 150%;

    /* overflow-y: auto; */

    &:before {
      content: "";
      position: absolute;
      bottom: 118px;
      left: 0;
      width: 100%;
      height: 38px; /* Ajuste a altura do degradê conforme necessário */
      /* background: linear-gradient(
        transparent,
        var(--gray)
      ); Defina as cores do degradê aqui */
    }
  }

  @media (min-width: 768px) {
    gap: 0.7rem;

    > h3 {
      font-size: 1rem;
    }

    > p {
      font-size: 0.74rem;

      &:before {
        bottom: 132px;
      }
    }
  }
`;

export const FlagNotAvailable = styled.span<{ dark?: boolean }>`
  position: absolute;
  top: 10px;
  left: 10px;

  background: var(--black);

  border-radius: 15px;

  padding: 0.3rem 0.8rem;

  opacity: 0.8;

  font-size: 0.7rem;
  color: var(--white);
`;

export const FlagAvailable = styled.span<{dark: boolean}>`
  position: absolute;
  top: 10px;
  left: 10px;

  background: ${(props) =>
        props.dark ? "var(--primary-color)" : "var(--secondary-color)"};

  border-radius: 15px;

  padding: 0.3rem 0.8rem;

  opacity: 0.8;

  font-size: 0.7rem;
  color: var(--white);
`;
