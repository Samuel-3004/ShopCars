import React, { LegacyRef, useContext, useState } from "react";
import {
  BackgroundModalEditAddress,
  ButtonAddressContainer,
  FieldsetAddressContainer,
  FormAddressContainer,
  TitleAddressContainer,
} from "./style";
import { UserContext } from "../../../providers/UserProvider/UserContext";
import useOutClick from "../../../hooks/useOutclick";

const EditAddressModal = () => {
  const { updateUser, userIdCars, addressEditModal, setAddressEditModal } =
    useContext(UserContext);

  const [formData, setFormData] = useState({
    cep: userIdCars?.cep || "",
    state: userIdCars?.state || "",
    city: userIdCars?.city || "",
    street: userIdCars?.street || "",
    number: userIdCars?.number || 0,
    complement: userIdCars?.complement || "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    formData.number = Number(formData.number);
    await updateUser(formData);
    setAddressEditModal(!addressEditModal);
  };

  const modalRef = useOutClick(() => setAddressEditModal(false));

  let darkMode: boolean | null = JSON.parse(
    localStorage.getItem("@darkMode") || "null"
  );

  darkMode !== true ? (darkMode = false) : (darkMode = true);

  return (
    <BackgroundModalEditAddress role="dialog">
      <FormAddressContainer
        onSubmit={handleSubmit}
        ref={modalRef as LegacyRef<HTMLFormElement>}
        dark={darkMode}
      >
        <TitleAddressContainer dark={darkMode}>
          <h3>Editar endereço</h3>
          <button onClick={() => setAddressEditModal(!addressEditModal)}>
            X
          </button>
        </TitleAddressContainer>
        <FieldsetAddressContainer dark={darkMode}>
          <label>CEP</label>
          <input
            type="text"
            name="cep"
            placeholder="CEP"
            value={formData.cep}
            onChange={handleChange}
          />
        </FieldsetAddressContainer>
        <FieldsetAddressContainer dark={darkMode}>
          <label>Estado</label>
          <input
            type="text"
            name="state"
            placeholder="Estado"
            value={formData.state}
            onChange={handleChange}
          />
        </FieldsetAddressContainer>
        <FieldsetAddressContainer dark={darkMode}>
          <label>Cidade</label>
          <input
            type="text"
            name="city"
            placeholder="Cidade"
            value={formData.city}
            onChange={handleChange}
          />
        </FieldsetAddressContainer>
        <FieldsetAddressContainer dark={darkMode}>
          <label>Rua</label>
          <input
            type="text"
            name="street"
            placeholder="Rua"
            value={formData.street}
            onChange={handleChange}
          />
        </FieldsetAddressContainer>
        <FieldsetAddressContainer dark={darkMode}>
          <label>Número</label>
          <input
            type="text"
            name="number"
            placeholder="Número"
            value={formData.number}
            onChange={handleChange}
          />
        </FieldsetAddressContainer>
        <FieldsetAddressContainer dark={darkMode}>
          <label>Complemento</label>
          <input
            type="text"
            name="complement"
            placeholder="Complemento"
            value={formData.complement}
            onChange={handleChange}
          />
        </FieldsetAddressContainer>
        <ButtonAddressContainer>
          <button onClick={() => setAddressEditModal(!addressEditModal)}>
            Cancelar
          </button>
          <button type="submit">Salvar alterações</button>
        </ButtonAddressContainer>
      </FormAddressContainer>
    </BackgroundModalEditAddress>
  );
};

export default EditAddressModal;
