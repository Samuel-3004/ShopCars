import { useContext } from "react";
import { HomeContext } from "../../../providers/HomeProvider/HomeProvider";
import { CustomSelect } from "./style";

const FilterBrand = () => {
  const { selectedbrand, setSelectedbrand } = useContext(HomeContext);

  const handleOptionClick = (option: string) => {
    setSelectedbrand((prevSelected) => (prevSelected === option ? "" : option));
  };

  let darkMode: boolean | null = JSON.parse(
    localStorage.getItem("@darkMode") || "null"
  );

  darkMode !== true ? darkMode = false : darkMode = true

  return (
    <CustomSelect dark={darkMode!}>
      <div className="select-header">Marca</div>
      <div className="options">
        <div
          className={`option ${
            selectedbrand === "chevrolet" ? "selected" : ""
          }`}
          onClick={() => handleOptionClick("chevrolet")}
        >
          Chevrolet
        </div>
        <div
          className={`option ${selectedbrand === "citroën" ? "selected" : ""}`}
          onClick={() => handleOptionClick("citroën")}
        >
          Citroën
        </div>
        <div
          className={`option ${selectedbrand === "fiat" ? "selected" : ""}`}
          onClick={() => handleOptionClick("fiat")}
        >
          Fiat
        </div>
        <div
          className={`option ${selectedbrand === "ford" ? "selected" : ""}`}
          onClick={() => handleOptionClick("ford")}
        >
          Ford
        </div>
        <div
          className={`option ${selectedbrand === "honda" ? "selected" : ""}`}
          onClick={() => handleOptionClick("honda")}
        >
          Honda
        </div>
        <div
          className={`option ${selectedbrand === "hyundai" ? "selected" : ""}`}
          onClick={() => handleOptionClick("hyundai")}
        >
          Hyundai
        </div>
        <div
          className={`option ${selectedbrand === "nissan" ? "selected" : ""}`}
          onClick={() => handleOptionClick("nissan")}
        >
          Nissan
        </div>
        <div
          className={`option ${selectedbrand === "peugeot" ? "selected" : ""}`}
          onClick={() => handleOptionClick("peugeot")}
        >
          Peugeot
        </div>
        <div
          className={`option ${selectedbrand === "renault" ? "selected" : ""}`}
          onClick={() => handleOptionClick("renault")}
        >
          Renault
        </div>
        <div
          className={`option ${selectedbrand === "toyota" ? "selected" : ""}`}
          onClick={() => handleOptionClick("toyota")}
        >
          Toyota
        </div>
        <div
          className={`option ${
            selectedbrand === "volkswagen" ? "selected" : ""
          }`}
          onClick={() => handleOptionClick("volkswagen")}
        >
          Volkswagen
        </div>
      </div>
    </CustomSelect>
  );
};

export default FilterBrand;
