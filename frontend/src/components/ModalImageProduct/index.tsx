import { useContext } from "react";
import { ModalBackgound, Modal } from "./style";
import { ImageContext } from "../../providers/ImageProvider/ImageContext";

export const ModalImageProduct = () => {
  const { setModalImage, imageById } = useContext(ImageContext);

  let darkMode: boolean | null = JSON.parse(
    localStorage.getItem("@darkMode") || "null"
  );

  darkMode !== true ? (darkMode = false) : (darkMode = true);

  return (
    <ModalBackgound onClick={() => setModalImage(false)}>
      <Modal dark={darkMode}>
        <img
          src={imageById && imageById}
          alt="imagem do carro"
          className="image-car"
        />
      </Modal>
    </ModalBackgound>
  );
};
