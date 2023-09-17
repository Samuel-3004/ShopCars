import { useContext, useState } from "react";
import {
  ButtonCreate,
  SectionProfileInfoComponent,
  SiglaUser,
  UserDiv,
} from "./style";
import { UserContext } from "../../providers/UserProvider/UserContext";
import RegisterCarModal from "../RegisterCarModal";

const SectionProfileInfo = () => {
  const { userIdCars } = useContext(UserContext);
  const [modal, setModal] = useState(false);
  let darkMode: boolean | null = JSON.parse(
    localStorage.getItem("@darkMode") || "null"
  );

  darkMode !== true ? (darkMode = false) : (darkMode = true);

  return (
    <SectionProfileInfoComponent dark={darkMode!}>
      {modal && <RegisterCarModal setModal={setModal} />}
      <UserDiv dark={darkMode!}>
        <SiglaUser>{userIdCars?.name[0]}</SiglaUser>
        <div>
          <span>{userIdCars?.name}</span>
          {userIdCars?.seller === true ? (
            <span>Anunciante</span>
          ) : (
            <span>Comprador</span>
          )}
        </div>
      </UserDiv>
      <p>{userIdCars?.description}</p>
      {userIdCars?.seller === true ? (
        <ButtonCreate onClick={() => setModal(true)} dark={darkMode!}>
          Criar anúncio
        </ButtonCreate>
      ) : null}
    </SectionProfileInfoComponent>
  );
};

export default SectionProfileInfo;
