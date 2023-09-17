import { styled } from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9;

  backdrop-filter: blur(2px);
`;

export const ModalContainer = styled.div<{ dark?: boolean }>`
  width: 95%;
  max-width: 520px;
  max-height: 90%;
  background-color: ${(props) => (props.dark ? "var(--gray)" : "var(--white)")};
  border-radius: 8px;
  margin: 2rem auto 0;
  overflow-y: auto;
`;

export const FormModalContainer = styled.form<{ dark?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 8px;
  padding: 1.4rem;
  /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */
  background: ${(props) => (props.dark ? "var(--gray)" : "var(--white)")};
  margin: 0 auto;

  > .division_between_buttons {
    width: 100%;
    height: 2px;
    border: 1px solid var(--light-gray);
    margin: 0.5rem 0;
  }

  > .another_brand_input {
    border: none;
    padding: 0.2rem 1rem;
    position: relative;
    top: -1rem;
    border-bottom: 1px solid var(--gray);
    outline: none;
    transition: 0.2s ease;

    &:focus {
      border-bottom: 1px solid var(--primary-color);
    }

    &::placeholder {
      color: var(--light-gray);
    }
  }
`;

export const TitleModal = styled.div<{ dark?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  > h3 {
    color: ${(props) =>
      props.dark ? "var(--primary-color)" : "var(--secondary-color)"};
    font-size: 1rem;
    text-decoration: underline;
  }

  > span {
    color: var(--light-gray);
    font-size: 1rem;
    cursor: pointer;
  }
`;

export const TitleOptions = styled.div<{ dark?: boolean }>`
  > h4 {
    color: ${(props) => (props.dark ? "var(--white)" : "var(--gray)")};
    font-size: 0.9rem;
  }
`;

export const DualFields = styled.div<{ dark?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  width: 100%;

  > fieldset {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    border: none;
    width: 60%;

    > label {
      color: ${(props) => (props.dark ? "var(--white)" : "var(--gray)")};
      font-size: 0.8rem;
    }

    > input {
      padding: 0.7rem 1rem;
      width: 100%;
      border-radius: 8px;
      border: 1px solid
        ${(props) => (props.dark ? "transparent" : "var(--gray)")};
      outline: none;
      transition: 0.2s ease;
      color: ${(props) => (props.dark ? "var(--white)" : "var(--gray)")};
      background-color: ${(props) =>
        props.dark ? "var(--black)" : "var(--white)"};

      &:focus {
        border: 1px solid
          ${(props) =>
            props.dark ? "var(--primary-color)" : "var(--secondary-color)"};
      }

      &::placeholder {
        color: ${(props) => (props.dark ? "var(--white)" : "var(--gray)")};
      }

      &:disabled {
        background-color: ${(props) =>
          props.dark ? "var(--gray)" : "var(--white)"};
      }
    }
  }
`;

export const FieldsetModal = styled.fieldset<{ dark?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  border: none;
  position: relative;

  > label {
    color: ${(props) => (props.dark ? "var(--white)" : "var(--gray)")};
    font-size: 0.8rem;
  }

  > select {
    padding: 0.7rem 1rem;
    border-radius: 8px;
    border: 1px solid ${(props) => (props.dark ? "transparent" : "var(--gray)")};
    outline: none;
    color: ${(props) => (props.dark ? "var(--white)" : "var(--gray)")};
    background-color: ${(props) =>
      props.dark ? "var(--black)" : "var(--white)"};
    transition: 0.2s ease;
  }

  > textarea {
    padding: 0.7rem 1rem;
    border-radius: 8px;
    border: 1px solid ${(props) => (props.dark ? "transparent" : "var(--gray)")};
    outline: none;
    color: ${(props) => (props.dark ? "var(--white)" : "var(--gray)")};
    background-color: ${(props) =>
      props.dark ? "var(--black)" : "var(--white)"};
    transition: 0.2s ease;
    resize: none;

    &:focus {
      border: 1px solid
        ${(props) =>
          props.dark ? "var(--primary-color)" : "var(--secondary-color)"};
    }

    &::placeholder {
      color: ${(props) => (props.dark ? "var(--white)" : "var(--gray)")};
    }
  }

  > input {
    padding: 0.7rem 1rem;
    border-radius: 8px;
    border: 1px solid ${(props) => (props.dark ? "transparent" : "var(--gray)")};
    outline: none;
    color: ${(props) => (props.dark ? "var(--white)" : "var(--gray)")};
    background-color: ${(props) =>
      props.dark ? "var(--black)" : "var(--white)"};
    transition: 0.2s ease;

    &:focus {
      border: 1px solid
        ${(props) =>
          props.dark ? "var(--primary-color)" : "var(--secondary-color)"};
    }

    &::placeholder {
      color: ${(props) => (props.dark ? "var(--white)" : "var(--gray)")};
    }

    &:disabled {
      background-color: ${(props) =>
        props.dark ? "var(--black)" : "var(--white)"};
    }
  }
`;

export const ModalButtonContainer = styled.div<{ dark?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  > button {
    background: ${(props) =>
      props.dark ? "var(--primary-color)" : "var(--secondary-color)"};
    padding: 0.8rem;
    width: 100%;
    color: var(--white);
    font-size: 0.9rem;
    font-weight: 600;
    transition: 0.2s ease;

    &:hover {
      background: var(--black);
      color: var(--white);
    }
  }

  > .cancel {
    background-color: var(--light-gray);

    &:hover {
      background-color: var(--gray);
    }
  }
`;

export const AddImagesContainer = styled.div<{ dark?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  min-height: 35px;

  > button {
    background-color: ${(props) =>
      props.dark ? "var(--primary-color)" : "var(--secondary-color)"};
    height: 2rem;
    border-radius: 8px;
    /* width: 60%; */
    padding: 0.4rem 1rem;
    color: var(--white);
    font-weight: 700;
    transition: 0.2s ease;

    display: flex;
    align-items: center;
    gap: 0.1rem;

    &:hover {
      background: var(--primary-color-hover);
      color: var(--white);
    }
  }

  > .remove {
    position: absolute;
    top: 0;
    right: 0;
    width: 38%;
    color: var(--white);
    background-color: var(--light-gray);

    &:hover {
      background-color: var(--black);
    }
  }
`;
export const ErrorModal = styled.p`
  color: var(--alert-negative);
  font-size: 0.5rem;
  letter-spacing: 0.04rem;
  transition: 0.4s ease;
`;
