import { styled } from "styled-components";

export const CardContainer = styled.li`
  display: flex;
  flex-direction: column;

  width: 244px;

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  background: var(--light-black);

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
  scrollbar-color: var(--light-gray) transparent; /* Cor da barra de rolagem vertical */

  @media (min-width: 768px) {
    width: 262px;
    height: fit-content;
    max-height: 390px;
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

  @media (min-width: 768px) {
    gap: 0.7rem;

    > h3 {
      font-size: 1rem;
    }
  }
`;

export const ContactUserContainer = styled.div<{ dark?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  span.name-car {
    color: ${(props) => (props.dark ? "var(--light-gray)" : "var(--black)")};
  }

  :nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 26px;
    height: 26px;

    border-radius: 50%;

    background-color: var(--gray);

    font-size: 0.7rem;

    color: var(--white);
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

      opacity: 0.7;

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

  padding: 0.3rem;

  background: var(--alert-success);

  color: var(--white);
  font-size: 1.2rem;
`;

export const DescriptionWithOverFlow = styled.section<{ dark?: boolean }>`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  overflow: hidden;
  -webkit-box-orient: vertical;
  > p {
    font-size: 0.6rem;
    color: ${(props) => (props.dark ? "var(--light-gray)" : "var(--black)")};
    height: 56px;
    line-height: 157%;

    &:before {
      content: "";
      position: absolute;
      bottom: 85px;
      left: 0;
      width: 100%;
      height: 50px;
    }
  }

  @media (min-width: 768px) {
    gap: 0.7rem;

    > h3 {
      font-size: 1rem;
    }

    > p {
      font-size: 0.7rem;
    }
  }
`;
