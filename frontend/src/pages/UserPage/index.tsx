import {
  BodyContainerHome,
  Divanucios,
  ListCardUserPage,
  MainContainerUserProfile,
} from "./style";
import Footer from "../../components/Footer";
import SectionProfileView from "../../components/SectionProfileView";
import { Header } from "../../components/Header";
import EditProfileModal from "../../components/EditProfileModal";
import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/UserProvider/UserContext";
import EditAddressModal from "../../components/EditProfileModal/EditAddressModal";
import CardUserProfile from "../../components/CardUserPage";
import { ButtonNext, NextButtonContainer } from "../Home/style";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const UserPage = () => {
  const {
    profileEditModal,
    addressEditModal,
    currentPageprofileComum,
    setCurrentPageProfileComum,
    allcarsComumProfile,
  } = useContext(UserContext);

  const itemsPerPage = 12;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let totalPages = 1;
  if (allcarsComumProfile.length < 12) {
    const totalItems = allcarsComumProfile.length + 1;
    totalPages = Math.ceil(totalItems / itemsPerPage);
  } else {
    const totalItems = allcarsComumProfile.length;
    totalPages = Math.ceil(totalItems / itemsPerPage);
  }

  let darkMode: boolean | null = JSON.parse(
    localStorage.getItem("@darkMode") || "null"
  );

  darkMode !== true ? (darkMode = false) : (darkMode = true);

  return (
    <>
      <BodyContainerHome dark={darkMode!}>
        <MainContainerUserProfile>
          <Header />
          <SectionProfileView />
          <Divanucios dark={darkMode!}>
            <h2>Anúncios</h2>
          </Divanucios>
          <ListCardUserPage>
            <CardUserProfile />
          </ListCardUserPage>
        </MainContainerUserProfile>
        {profileEditModal && <EditProfileModal />}
        {addressEditModal && <EditAddressModal />}
        <NextButtonContainer dark={darkMode!}>
          {currentPageprofileComum > 1 && (
            <ButtonNext
              to="/userPage"
              onClick={() => {
                setCurrentPageProfileComum(currentPageprofileComum - 1);
              }}
              dark={darkMode!}
            >
              <BsArrowLeftShort />
              Anterior
            </ButtonNext>
          )}

          <span>
            {currentPageprofileComum} de {totalPages}
          </span>
          {currentPageprofileComum < totalPages && (
            <ButtonNext
              to="/userPage"
              onClick={() => {
                setCurrentPageProfileComum(currentPageprofileComum + 1);
              }}
              dark={darkMode!}
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

export default UserPage;
