import { styled } from "styled-components";

export const ModalBackgound = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  z-index: 9;
  backdrop-filter: blur(6px);
  justify-content: center;
  @media (min-width: 768px) {
    left: 0;
  }
`;

export const Modal = styled.div<{ dark: boolean }>`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .image-car {
    border-radius: 15px;
    width: 95%;
    height: 75%;
    object-fit: contain;

    @media (min-width: 768px) {
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    width: 85%;
  }
`;

export const ModalTitle = styled.div<{ dark: boolean }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h2 {
    margin: 20px 0;
    font-size: 16px;
    color: ${(props) =>
      props.dark ? "var(--primary-color)" : "var(--secondary-color)"};

    @media (min-width: 768px) {
      font-size: 20px;
    }
  }

  svg.close-btn-modalImage {
    position: absolute;
    right: 8%;
    font-size: 24px;
    cursor: pointer;
    color: #adb5bd;

    @media (min-width: 768px) {
      right: 3%;
    }
  }
`;
