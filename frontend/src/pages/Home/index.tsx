import CardHome from "../../components/CardHome";
import Footer from "../../components/Footer";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import {
  BannerContainer,
  BodyContainerHome,
  ButtonNext,
  ListCardContainer,
  MainContainerHome,
  NextButtonContainer,
  TitleContainer,
} from "./style";
import FilterCars from "../../components/Filter";
import CustomSwiperComponent from "../../components/Swiper";
import { HomeContext } from "../../providers/HomeProvider/HomeProvider";
import { useContext, useEffect } from "react";
import ButtonHome from "../../components/Filter/ButonModal";
import ModalFilter from "../../components/Filter/ModalRenderFilter";
import { Header } from "../../components/Header";
import { UserContext } from "../../providers/UserProvider/UserContext";
import EditProfileModal from "../../components/EditProfileModal";
import EditAddressModal from "../../components/EditProfileModal/EditAddressModal";

const Home = () => {
  const { currentPage, setCurrentPage, allcarsPages } = useContext(HomeContext);
  const { profileEditModal, addressEditModal } = useContext(UserContext);

  let darkMode: boolean | null = JSON.parse(
    localStorage.getItem("@darkMode") || "null"
  );

  darkMode !== true ? darkMode = false : darkMode = true
  const itemsPerPage = 12;

  let totalPages = 1;
  if (allcarsPages.length < 12) {
    const totalItems = allcarsPages.length + 1;
    totalPages = Math.ceil(totalItems / itemsPerPage);
  } else {
    const totalItems = allcarsPages.length;
    totalPages = Math.ceil(totalItems / itemsPerPage);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <BodyContainerHome dark={darkMode!}>
        <Header />
        <BannerContainer>
          <TitleContainer>
            <h1>
              Motors <span>Shop</span>
            </h1>
            <p>A melhor plataforma de anúncios de carros do país</p>
          </TitleContainer>
          <CustomSwiperComponent />
        </BannerContainer>
        <MainContainerHome>
          <FilterCars />
          <ListCardContainer>
            <CardHome />
          </ListCardContainer>
        </MainContainerHome>
        <ButtonHome />
        <ModalFilter />
        <NextButtonContainer dark={darkMode!}>
          {currentPage > 1 && (
            <ButtonNext
              to="/home"
              onClick={() => {
                setCurrentPage(currentPage - 1);
              }}
              dark={darkMode!}
            >
              <BsArrowLeftShort
                style={
                  darkMode!
                    ? { color: "var(--light-gray)" }
                    : { color: "var(--black)" }
                }
              />
              Anterior
            </ButtonNext>
          )}
          <span>
            {currentPage} de {totalPages}
          </span>
          {currentPage < totalPages && (
            <ButtonNext
              to="/home"
              onClick={() => {
                setCurrentPage(currentPage + 1);
              }}
              style={
                darkMode!
                  ? { color: "var(--light-gray)" }
                  : { color: "var(--black)" }
              }
            >
              Seguinte
              <BsArrowRightShort
                style={
                  darkMode!
                    ? { color: "var(--light-gray)" }
                    : { color: "var(--black)" }
                }
              />
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

export default Home;
