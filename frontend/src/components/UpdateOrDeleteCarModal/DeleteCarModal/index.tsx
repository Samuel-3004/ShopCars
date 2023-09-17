import {
  DeleteModalButtons,
  DeleteModalContainer,
  DeleteModalHeader,
  DeleteModalWrapper,
} from "./style";
import { IDeleteModalProps } from "../@types";
import { useContext } from "react";
import { CarContext } from "../../../providers/CarProvider/CarContext";

const DeleteCarModal = ({
  carId,
  setDeleteCarModal,
  setUpdateModal,
  setDisableOutclickEvent,
}: IDeleteModalProps) => {
  const { deleteCar } = useContext(CarContext);

  const handleDeleteCar = async (id: string): Promise<void> => {
    try {
      await deleteCar(id);
      setDeleteCarModal(false);
      setUpdateModal(false);
    } catch (err) {
      console.log(err);
    }
  };

  const closeDeleteCarModal = () => {
    setDeleteCarModal(false);
    setDisableOutclickEvent(false);
  };

  let darkMode: boolean | null = JSON.parse(
    localStorage.getItem("@darkMode") || "null"
  );

  darkMode !== true ? (darkMode = false) : (darkMode = true);

  return (
    <DeleteModalWrapper role="dialog">
      <DeleteModalContainer dark={darkMode}>
        <DeleteModalHeader dark={darkMode}>
          <h3>Excluir anúncio</h3>
          <span onClick={() => closeDeleteCarModal()}>X</span>
        </DeleteModalHeader>
        <h4>Tem certeza que deseja remover este anúncio?</h4>
        <p>
          Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
          conta e removerá seus dados de nossos servidores.
        </p>
        <DeleteModalButtons>
          <button
            type="button"
            className="cancel"
            onClick={() => closeDeleteCarModal()}
          >
            Cancelar
          </button>
          <button
            type="button"
            className="delete"
            onClick={() => handleDeleteCar(carId!)}
          >
            Sim, excluir anúncio
          </button>
        </DeleteModalButtons>
      </DeleteModalContainer>
    </DeleteModalWrapper>
  );
};

export default DeleteCarModal;
