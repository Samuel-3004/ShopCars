import { useContext } from "react";
import FilterBrand from "./Brand";
import ModelCars from "./Model";
import ColorCars from "./color";
import { RangeSlider } from "./Price";
import { RangeKMSlider } from "./Km";
import { FilterStyle } from "./style";
import ModalFilter from "./ModalRenderFilter";
import { HomeContext } from "../../providers/HomeProvider/HomeProvider";
import YearCars from "./Year";
import FuelTypeCars from "./FuelType";

const FilterCars = () => {
  const { clearFilters } = useContext(HomeContext);

  let darkMode: boolean | null = JSON.parse(
    localStorage.getItem("@darkMode") || "null"
  );

  darkMode !== true ? darkMode = false : darkMode = true

  return (
    <FilterStyle dark={darkMode!}>
      <ModalFilter />
      <FilterBrand />
      <ModelCars />
      <ColorCars />
      <YearCars />
      <FuelTypeCars />
      <RangeKMSlider />
      <RangeSlider />
      <button onClick={clearFilters}> Limpar Filtros </button>
    </FilterStyle>
  );
};

export default FilterCars;
