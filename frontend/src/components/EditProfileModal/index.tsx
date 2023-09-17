import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserProvider/UserContext";
import {
  BackgroundModalEditProfile,
  ButtonContainer,
  FieldsetContainer,
  FormContainer,
  TitleContainer,
} from "./style";

const EditProfileModal = () => {
  const {
    updateUser,
    userIdCars,
    profileEditModal,
    setProfileEditModal,
    deleteUser,
  } = useContext(UserContext);
  const [formData, setFormData] = useState({
    name: userIdCars?.name || "",
    email: userIdCars?.email || "",
    cpf: userIdCars?.cpf || "",
    cellPhone: userIdCars?.cellPhone || "",
    dateOfBirth: userIdCars?.dateOfBirth || "",
    description: userIdCars?.description || "",
  });

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await updateUser(formData);
    setProfileEditModal(!profileEditModal);
  };

  let darkMode: boolean | null = JSON.parse(
    localStorage.getItem("@darkMode") || "null"
  );

  darkMode !== true ? (darkMode = false) : (darkMode = true);

  return (
    <BackgroundModalEditProfile>
      <FormContainer onSubmit={handleSubmit} dark={darkMode}>
        <TitleContainer dark={darkMode}>
          <h3>Editar perfil</h3>
          <button onClick={() => setProfileEditModal(!profileEditModal)}>
            X
          </button>
        </TitleContainer>
        <FieldsetContainer dark={darkMode}>
          <label>Nome</label>
          <input
            type="text"
            name="name"
            placeholder="Nome"
            value={formData.name}
            onChange={handleChange}
          />
        </FieldsetContainer>
        <FieldsetContainer dark={darkMode}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </FieldsetContainer>
        <FieldsetContainer dark={darkMode}>
          <label>CPF</label>
          <input
            type="text"
            name="cpf"
            placeholder="900.800.090-00"
            value={formData.cpf}
            onChange={handleChange}
          />
        </FieldsetContainer>
        <FieldsetContainer dark={darkMode}>
          <label>Celular</label>
          <input
            type="tel"
            name="cellPhone"
            placeholder="(084)90909-9092"
            value={formData.cellPhone}
            onChange={handleChange}
          />
        </FieldsetContainer>
        <FieldsetContainer dark={darkMode}>
          <label>Data de nascimento</label>
          <input
            type="date"
            name="dateOfBirth"
            placeholder="09/12/99"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
        </FieldsetContainer>
        <FieldsetContainer dark={darkMode}>
          <label>Descrição</label>
          <textarea
            value={formData.description}
            name="description"
            onChange={handleChange}
          ></textarea>
        </FieldsetContainer>
        <ButtonContainer dark={darkMode}>
          <button onClick={() => setProfileEditModal(!profileEditModal)}>
            Cancelar
          </button>
          <button type="button" onClick={() => deleteUser()}>
            Excluir Perfil
          </button>
          <button type="submit">Salvar alterações</button>
        </ButtonContainer>
      </FormContainer>
    </BackgroundModalEditProfile>
  );
};

export default EditProfileModal;
