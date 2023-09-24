import { useContext } from "react";
import {
  InfoContainer,
  KmAndYear,
  ModalContainer,
  ModalDetails,
  NameAndPrice,
  PictureAndInfos,
  TitleAndCloseBtn,
} from "./style";
import { CarContext } from "../../providers/CarProvider/CarContext";
import { UserContext } from "../../providers/UserProvider/UserContext";
import { convertNumberToLocaleString } from "../UpdateOrDeleteCarModal/utils";

const DetailsCarModal = () => {
  const { carDetailModal, setCarDetailModal, selectedCar } =
    useContext(CarContext);
  const { userIdCars } = useContext(UserContext);

  let darkMode: boolean | null = JSON.parse(
    localStorage.getItem("@darkMode") || "null"
  );

  darkMode !== true ? (darkMode = false) : (darkMode = true);

  return (
    <ModalContainer onClick={() => setCarDetailModal(!carDetailModal)}>
      <ModalDetails dark={darkMode!}>
        <TitleAndCloseBtn dark={darkMode!}>
          <h4>Detalhes do veículo</h4>
        </TitleAndCloseBtn>
        <PictureAndInfos>
          <figure>
            <img src={selectedCar?.imgCover} />
          </figure>
          <InfoContainer dark={darkMode!}>
            <h5>
              {selectedCar?.brand} - {selectedCar?.model}
            </h5>
            <KmAndYear dark={darkMode!}>
              <span>Km {convertNumberToLocaleString(selectedCar!.km)}</span>
              <span>{selectedCar?.year}</span>
            </KmAndYear>
            <NameAndPrice dark={darkMode!}>
              <div>
                <span>{userIdCars?.name[0]}</span>
                <span>{userIdCars?.name}</span>
              </div>
              <span>R$ {convertNumberToLocaleString(selectedCar!.price)}</span>
            </NameAndPrice>
            <p>{selectedCar?.description}</p>
          </InfoContainer>
        </PictureAndInfos>
      </ModalDetails>
    </ModalContainer>
  );
};

export default DetailsCarModal;
