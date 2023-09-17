import { styled } from "styled-components";

export const BackgroundModalEditProfile = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  right: 0;

  background-color: rgba(0, 0, 0, 0.7);

  z-index: 500;

  backdrop-filter: blur(2px);
`;

export const FormContainer = styled.form<{ dark?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  background: ${(props) => (props.dark ? "var(--black)" : "white")};

  padding: 1rem 2rem;
  /* height: 570px; */

  border-radius: 8px;

  overflow-y: auto;

  @media (min-width: 768px) {
    width: 520px;
  }
`;

export const TitleContainer = styled.div<{ dark?: boolean }>`
  display: flex;
  justify-content: space-between;

  h3 {
    color: ${(props) =>
      props.dark ? "var(--primary-color)" : "var(--secondary-color)"};
  }

  > button {
    cursor: pointer;

    background: transparent;

    color: ${(props) => (props.dark ? "var(--white)" : "var(--gray)")};
  }
`;

export const FieldsetContainer = styled.fieldset<{ dark?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  border: none;

  > label {
    color: ${(props) => (props.dark ? "var(--white)" : "var(--gray)")};
    font-size: 0.8rem;
  }

  > textarea {
    padding: 0.7rem 1rem;
    border-radius: 8px;
    border: 1px solid ${(props) =>
      props.dark ? "transparent" : "var(--gray)"};
    outline: none;
    background-color: ${(props) =>
      props.dark ? "var(--gray)" : "var(--white)"};
    color: ${(props) => (props.dark ? "var(--white)" : "var(--gray)")};
    transition: 0.2s ease;
    resize: none;

    &:focus {
      border: 1px solid
        ${(props) =>
          props.dark ? "var(--primary-color)" : "var(--secondary-color)"};
    }

    &::placeholder {
      color: var(--light-gray);
    }
  }

  > input {
    padding: 0.7rem 1rem;
    border-radius: 8px;
    border: 1px solid ${(props) =>
      props.dark ? "transparent" : "var(--gray)"};
    outline: none;
    background-color: ${(props) =>
      props.dark ? "var(--gray)" : "var(--white)"};
    color: ${(props) => (props.dark ? "var(--white)" : "var(--gray)")};
    transition: 0.2s ease;

    &:focus {
      border: 1px solid
        ${(props) =>
          props.dark ? "var(--primary-color)" : "var(--secondary-color)"};
    }

    &::placeholder {
      color: var(--light-gray);
    }
  }
`;

export const ButtonContainer = styled.div<{ dark?: boolean }>`
  display: flex;
  justify-content: space-between;
  gap: 0.2rem;

  > button {
    padding: 0.7rem 1.7rem;
    transition: 0.1s ease;
  }

  :nth-child(1) {
    background: var(--light-gray);
    color: var(--white);

    &:hover {
      background: var(--gray);
      color: var(--light-gray);
    }
  }

  :nth-child(2) {
    background: var(--alert-negative);
    color: var(--white);

    &:hover {
      background: var(--gray);
      color: var(--white);
    }
  }

  :nth-child(3) {
    background: ${(props) =>
      props.dark ? "var(--primary-color)" : "var(--secondary-color)"};
    color: var(--white);

    &:hover {
      background: var(--primary-color-hover);
    }
  }
`;
