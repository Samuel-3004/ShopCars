import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import {
  BodyContainerHome,
  CardListUserAds,
  SectionProfileInfoComponent,
  Shadow,
  SiglaUser,
  UserDiv,
} from "./style";
import CardUserAds from "./CardUserAds";
import { TDataCarResponse } from "../../providers/CarProvider/@types";
import { useContext } from "react";
import { CarContext } from "../../providers/CarProvider/CarContext";
import { ButtonNext, NextButtonContainer } from "../Home/style";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import EditProfileModal from "../../components/EditProfileModal";
import EditAddressModal from "../../components/EditProfileModal/EditAddressModal";
import { UserContext } from "../../providers/UserProvider/UserContext";

const UserAds = () => {
  const userData: TDataCarResponse[] | null = JSON.parse(
    localStorage.getItem("@carsSellerSelect") || "null"
  );

  let darkMode: boolean | null = JSON.parse(
    localStorage.getItem("@darkMode") || "null"
  );

  darkMode !== true ? (darkMode = false) : (darkMode = true);

  const { carsSellerSelect, currentPageprofile, setCurrentPageProfile } =
    useContext(CarContext);
  const { profileEditModal, addressEditModal } = useContext(UserContext);

  const itemsPerPage = 12;
  let totalPages = 1;
  if (carsSellerSelect!.length < 12) {
    const totalItems = carsSellerSelect!.length + 1;
    totalPages = Math.ceil(totalItems / itemsPerPage);
  } else {
    const totalItems = carsSellerSelect!.length;
    totalPages = Math.ceil(totalItems / itemsPerPage);
  }

  return (
    <>
      <BodyContainerHome dark={darkMode}>
        <Header />
        <SectionProfileInfoComponent dark={darkMode}>
          <Shadow dark={darkMode}>
            <UserDiv dark={darkMode}>
              <SiglaUser>{userData![0].user.name[0]}</SiglaUser>
              <div>
                <span>{userData![0].user?.name}</span>
                <span>Anunciante</span>
              </div>
            </UserDiv>
            <p>{userData![0].user?.description}</p>
          </Shadow>
          <h2>Anúncios de {userData![0].user.name}</h2>
          <CardListUserAds>
            <CardUserAds />
          </CardListUserAds>
        </SectionProfileInfoComponent>

        <NextButtonContainer dark={darkMode}>
          {currentPageprofile > 1 && (
            <ButtonNext
              dark={darkMode}
              to={`/user/${userData![0].user.id}`}
              onClick={() => {
                setCurrentPageProfile(currentPageprofile - 1);
              }}
            >
              <BsArrowLeftShort />
              Anterior
            </ButtonNext>
          )}

          <span>
            {currentPageprofile} de {totalPages}
          </span>
          {currentPageprofile < totalPages && (
            <ButtonNext
              dark={darkMode}
              to={`/user/${userData![0].user.id}`}
              onClick={() => {
                setCurrentPageProfile(currentPageprofile + 1);
              }}
            >
              Seguinte
              <BsArrowRightShort />
            </ButtonNext>
          )}
        </NextButtonContainer>
        {profileEditModal && <EditProfileModal />}
        {addressEditModal && <EditAddressModal />}
        <Footer />
      </BodyContainerHome>
    </>
  );
};

export default UserAds;
