import { useContext } from "react";
import {
  ModalContainer,
  ModalContent,
  CloseButton,
  Title,
  TitleAndBtnCloseContainer,
  RangeContainer,
  CarFilters,
} from "./style";
import { HomeContext } from "../../../providers/HomeProvider/HomeProvider";
import FilterBrand from "../Brand";
import ModelCars from "../Model";
import ColorCars from "../color";
import YearCars from "../Year";
import FuelTypeCars from "../FuelType";
import { RangeKMSlider } from "../Km";
import { RangeSlider } from "../Price";

const ModalFilter = () => {
  const { modalFilter, setModalFilter, clearFilters } = useContext(HomeContext);

  const closeModal = () => {
    setModalFilter(false);
  };

  if (!modalFilter) {
    return null;
  }

  const clearFiltersAndCloseModal = () => {
    closeModal();
    clearFilters();
  };

  return (
    <ModalContainer>
      <ModalContent>
        <TitleAndBtnCloseContainer>
          <CloseButton onClick={closeModal}>X</CloseButton>
          <Title>Filtro</Title>
        </TitleAndBtnCloseContainer>
        <CarFilters>
          <FilterBrand />
          <ModelCars />
          <ColorCars />
          <YearCars />
          <FuelTypeCars />
        </CarFilters>
        <RangeContainer>
          <RangeKMSlider />
          <RangeSlider />
          <button onClick={clearFiltersAndCloseModal}> Limpar Filtros </button>
        </RangeContainer>
      </ModalContent>
    </ModalContainer>
  );
};

export default ModalFilter;
