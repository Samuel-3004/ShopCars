import { styled } from "styled-components";

export const ModalHeaderContainer = styled.ul<{ dark: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  position: absolute;
  top: 87px;
  right: 28px;

  padding: 1rem;

  border-radius: 6px;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  transform: translateY(100%);
  opacity: 1;

  transition: transform 0.3s ease, opacity 0.3s ease;

  backdrop-filter: blur(19px); /* Ajuste o valor conforme desejado */
  background-color: ${(props) => (props.dark ? "var(--black)" : "white")};
`;

export const ModalItem = styled.li<{ dark: boolean }>`
  color: ${(props) => (props.dark ? "var(--white)" : "var(--gray)")};

  cursor: pointer;
  font-size: 0.8rem;

  &:hover {
    color:  ${(props) => (props.dark ? "var(--primary-color)" : "var(--secondary-color)")};
  }
`;
