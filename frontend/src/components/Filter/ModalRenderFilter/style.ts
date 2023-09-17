import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: 300px;
  max-width: 400px;
  position: relative;

  justify-content: center;
  align-items: center;
  button {
    width: 240px;
    border-radius: 4px;
    color: var(--white);
    background-color: var(--primary-color);
    border: none;
    padding: 10px;
    font-family: "Lexend", sans-serif;
  }
`;

export const TitleAndBtnCloseContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding-bottom: .6rem;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
`

export const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

export const Title = styled.h4`
  margin-bottom: 10px;
  margin: -10px 0 0 0;
`;

export const CarFilters = styled.section`
  display: flex;
  flex-direction: column;

  overflow-y: auto;

  height: 218px;

  @media (min-width: 380px) {
    height: 300px;
  }
`

export const RangeContainer = styled.section`
  display: flex;
  flex-direction: column;
`

