import { useContext } from "react";
import { HomeContext } from "../../../providers/HomeProvider/HomeProvider";
import { FuelTypeCarsWrapper } from "./style";

const FuelTypeCars = () => {
  const { selectedFuelType, setSelectedFuelType } = useContext(HomeContext);
  let darkMode: boolean | null = JSON.parse(
    localStorage.getItem("@darkMode") || "null"
  );

  darkMode !== true ? darkMode = false : darkMode = true

  const handleOptionClick = (option: string) => {
    setSelectedFuelType((prevSelected) =>
      prevSelected === option ? "" : option
    );
  };

  return (
    <FuelTypeCarsWrapper dark={darkMode!}>
      <div className="select-header">Tipo de Combustível</div>
      <div className="options">
        <div
          className={`option ${
            selectedFuelType === "Elétrico" ? "selected" : ""
          }`}
          onClick={() => handleOptionClick("Elétrico")}
        >
          Elétrico
        </div>
        <div
          className={`option ${selectedFuelType === "flex" ? "selected" : ""}`}
          onClick={() => handleOptionClick("flex")}
        >
          Flex
        </div>
        <div
          className={`option ${
            selectedFuelType === "Híbrido" ? "selected" : ""
          }`}
          onClick={() => handleOptionClick("Híbrido")}
        >
          Híbrido
        </div>
      </div>
    </FuelTypeCarsWrapper>
  );
};

export default FuelTypeCars;
