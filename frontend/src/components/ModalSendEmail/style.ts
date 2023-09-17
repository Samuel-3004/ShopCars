import { styled } from "styled-components";

export const SpanCloseModalForgotten = styled.span`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  transition: 0.5s ease-in-out;

  &:hover {
    transform: scale(1.5);
  }
`;

export const DivContainerModal = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  justify-content: center;
  background: rgba(18, 18, 20, 0.5);
  backdrop-filter: blur(5px);

  @media (min-width: 768px) {
    align-items: center;
    padding-bottom: 4rem;
  }
`;

export const FormModalContainer = styled.form`
  position: relative;
  width: 95%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 8px;
  padding: 1.4rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background: var(--white);
  max-width: 412px;
  margin: 0 auto;
`;

export const TitleModal = styled.div`
  > h3 {
    color: var(--gray);
  }
`;

export const TitleOptions = styled.div`
  > h4 {
    color: var(--gray);
    font-size: 0.9rem;
  }
`;

export const FieldsetModal = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  border: none;
  position: relative;

  > label {
    color: var(--gray);
    font-size: 0.8rem;
  }

  > textarea {
    padding: 0.7rem 1rem;
    border-radius: 8px;
    border: 2px solid var(--white);
    outline: none;
    color: var(--gray);
    transition: 0.2s ease;
    resize: none;

    &:focus {
      border: 2px solid var(--primary-color);
    }

    &::placeholder {
      color: var(--light-gray);
    }
  }

  > input {
    padding: 0.7rem 1rem;
    border-radius: 8px;
    border: 2px solid var(--white);
    outline: none;
    color: var(--gray);
    transition: 0.2s ease;

    &:focus {
      border: 2px solid var(--primary-color);
    }

    &::placeholder {
      color: var(--light-gray);
    }
  }

  > svg {
    color: var(--gray);
    top: 35px;
    right: 20px;
    position: absolute;
  }
`;

export const ModalButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  > button {
    background: var(--primary-color);
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
`;
