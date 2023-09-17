import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../providers/UserProvider/UserContext";
import { ModalHeaderContainer, ModalItem } from "./style";
import { useNavigate } from "react-router-dom";

const UserModalHeader = () => {
  const {
    logout,
    userIdCars,
    profileEditModal,
    setProfileEditModal,
    setAddressEditModal,
    addressEditModal,
  } = useContext(UserContext);

  const path = window.location.pathname;

  let darkMode: boolean | null = JSON.parse(
    localStorage.getItem("@darkMode") || "null"
  );

  darkMode !== true ? (darkMode = false) : (darkMode = true);

  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const handleClickNavigate = () => {
    navigate("/profile");
  };

  const handleClickNavigateToUserPage = () => {
    navigate("/userPage");
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <ModalHeaderContainer
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(-100%)",
        opacity: isVisible ? 1 : 0,
      }}
      dark={darkMode}
    >
      {userIdCars?.seller === false && path !== "/userPage" ? (
        <ModalItem onClick={() => handleClickNavigateToUserPage()} dark={darkMode}>
          Ver perfil
        </ModalItem>
      ) : null}
      <ModalItem onClick={() => setProfileEditModal(!profileEditModal)} dark={darkMode}>
        Editar Perfil
      </ModalItem>
      <ModalItem onClick={() => setAddressEditModal(!addressEditModal)} dark={darkMode}>
        Editar endereço
      </ModalItem>
      {userIdCars?.seller === true && path !== "/profile" ? (
        <ModalItem onClick={() => handleClickNavigate()} dark={darkMode}>
          Meus anúncios
        </ModalItem>
      ) : null}
      <ModalItem onClick={() => logout()} dark={darkMode}>Sair</ModalItem>
    </ModalHeaderContainer>
  );
};

export default UserModalHeader;
