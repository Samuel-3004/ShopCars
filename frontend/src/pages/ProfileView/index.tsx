import { useContext, useEffect } from "react";
import CardAdmin from "../../components/CardHome/CardAdmin";
import EditProfileModal from "../../components/EditProfileModal";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";

import SectionProfileInfo from "../../components/SectionProfileView";
import {
  BodyContainerHome,
  CardListProfile,
  MainContainerProfile,
} from "./style";
import { UserContext } from "../../providers/UserProvider/UserContext";
import EditAddressModal from "../../components/EditProfileModal/EditAddressModal";
import { ButtonNext, NextButtonContainer } from "../Home/style";
import { CarContext } from "../../providers/CarProvider/CarContext";
import DetailsCarModal from "../../components/DetailsCarModal";

const ProfileView = () => {
  const {
    profileEditModal,
    currentPageprofile,
    setCurrentPageProfile,
    allcarsUser2,
    addressEditModal,
  } = useContext(UserContext);
  const { carDetailModal } = useContext(CarContext);

  let darkMode: boolean | null = JSON.parse(
    localStorage.getItem("@darkMode") || "null"
  );

  darkMode !== true ? darkMode = false : darkMode = true

  const itemsPerPage = 12;
  let totalPages = 1;
  if (allcarsUser2.length < 12) {
    const totalItems = allcarsUser2.length + 1;
    totalPages = Math.ceil(totalItems / itemsPerPage);
  } else {
    const totalItems = allcarsUser2.length;
    totalPages = Math.ceil(totalItems / itemsPerPage);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <BodyContainerHome dark={darkMode!}>
        <MainContainerProfile>
          <Header />
          <SectionProfileInfo />
          <CardListProfile>
            <CardAdmin />
          </CardListProfile>
        </MainContainerProfile>
        {profileEditModal && <EditProfileModal />}
        {addressEditModal && <EditAddressModal />}
        {carDetailModal && <DetailsCarModal />}

        <NextButtonContainer  dark={darkMode!}>
          {currentPageprofile > 1 && (
            <ButtonNext
            dark={darkMode!}
              to="/profile"
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
            dark={darkMode!}
              to="/profile"
              onClick={() => {
                setCurrentPageProfile(currentPageprofile + 1);
              }}
            >
              Seguinte
              <BsArrowRightShort />
            </ButtonNext>
          )}
        </NextButtonContainer>
        <Footer />
      </BodyContainerHome>
    </>
  );
};

export default ProfileView;
