import { useContext } from "react";
import { HomeContext } from "../../../providers/HomeProvider/HomeProvider";
import { ColorCarsWrapper } from "./style";

const ColorCars = () => {
  const { selectedColor, setSelectedColor } = useContext(HomeContext);
  const handleOptionClick = (option: string) => {
    setSelectedColor((prevSelected) => (prevSelected === option ? "" : option));
  };
  let darkMode: boolean | null = JSON.parse(
    localStorage.getItem("@darkMode") || "null"
  );

  darkMode !== true ? darkMode = false : darkMode = true

  return (
    <ColorCarsWrapper dark={darkMode!}>
      <div className="select-header">Cor</div>
      <div className="options">
        <div
          className={`option ${selectedColor === "azul" ? "selected" : ""}`}
          onClick={() => handleOptionClick("azul")}
        >
          Azul
        </div>
        <div
          className={`option ${selectedColor === "branca" ? "selected" : ""}`}
          onClick={() => handleOptionClick("branca")}
        >
          Branca
        </div>
        <div
          className={`option ${selectedColor === "cinza" ? "selected" : ""}`}
          onClick={() => handleOptionClick("cinza")}
        >
          Cinza
        </div>
        <div
          className={`option ${selectedColor === "prata" ? "selected" : ""}`}
          onClick={() => handleOptionClick("prata")}
        >
          Prata
        </div>
        <div
          className={`option ${selectedColor === "preta" ? "selected" : ""}`}
          onClick={() => handleOptionClick("preta")}
        >
          Preta
        </div>
        <div
          className={`option ${selectedColor === "amarela" ? "selected" : ""}`}
          onClick={() => handleOptionClick("amarela")}
        >
          Amarela
        </div>
        <div
          className={`option ${selectedColor === "vermelha" ? "selected" : ""}`}
          onClick={() => handleOptionClick("vermelha")}
        >
          Vermelha
        </div>
        <div
          className={`option ${selectedColor === "marrom" ? "selected" : ""}`}
          onClick={() => handleOptionClick("marrom")}
        >
          Marrom
        </div>
        <div
          className={`option ${selectedColor === "verde" ? "selected" : ""}`}
          onClick={() => handleOptionClick("verde")}
        >
          Verde
        </div>
        <div
          className={`option ${selectedColor === "laranja" ? "selected" : ""}`}
          onClick={() => handleOptionClick("laranja")}
        >
          Laranja
        </div>
      </div>
    </ColorCarsWrapper>
  );
};

export default ColorCars;
