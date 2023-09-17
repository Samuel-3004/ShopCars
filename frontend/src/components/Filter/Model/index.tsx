import { useContext } from "react";
import { HomeContext } from "../../../providers/HomeProvider/HomeProvider";
import { ModelCarsWrapper } from "./style";

const ModelCars = () => {
  const { selectedModel, setSelectedModel } = useContext(HomeContext);

  const handleOptionClick = (option: string) => {
    setSelectedModel((prevSelected) => (prevSelected === option ? "" : option));
  };

  let darkMode: boolean | null = JSON.parse(
    localStorage.getItem("@darkMode") || "null"
  );

  darkMode !== true ? darkMode = false : darkMode = true

  const cars = [
    "camaro",
    "cobalt",
    "cruze",
    "aircross",
    "c3",
    "c4",
    "argo",
    "cronos",
    "doblo",
    "fiorino",
    "mobi",
    "palio",
    "strada",
    "toro",
    "uno",
    "ecosport",
    "fiesta",
    "focus",
    "fusion",
    "ka",
    "mustang",
    "ranger",
    "city",
    "civic",
    "fit",
    "hr-v",
    "creta",
    "hb20",
    "hb20s",
    "kicks",
    "march",
    "sentra",
    "versa",
    "208",
    "308",
    "captur",
    "duster",
    "kwid",
    "logan",
    "sandero",
    "corolla",
    "etios",
    "hilux",
    "yaris",
    "fox",
    "gol",
    "golf",
    "jetta",
    "polo",
    "saveiro",
    "t-cross",
    "up!",
    "voyage",
  ];

  return (
    <ModelCarsWrapper className="scrollbar-custom" dark={darkMode!}>
      <div className="select-header">Modelo</div>
      <div className="options">
        {cars.map((model) => (
          <div
            key={model}
            className={`option ${selectedModel === model ? "selected" : ""}`}
            onClick={() => handleOptionClick(model)}
          >
            {model}
          </div>
        ))}
      </div>
    </ModelCarsWrapper>
  );
};

export default ModelCars;
