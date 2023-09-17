import { Link } from "react-router-dom";
import {
  CardContainer,
  ContactUserContainer,
  ContainerInfo,
  ContainerInfoCar,
  DescriptionWithOverFlow,
  FigureContainer,
  FlagGoodDeal,
} from "./style";
import { TbFlag3Filled } from "react-icons/tb";
import { CarContext } from "../../../providers/CarProvider/CarContext";
import { useContext } from "react";

const CardUserAds = () => {
  const { carsSellerSelectPerPage, setCurrentPageProfile } =
    useContext(CarContext);

  const searchDataCar = async () => {
    setCurrentPageProfile(1);
  };

  let darkMode: boolean | null = JSON.parse(
    localStorage.getItem("@darkMode") || "null"
  );

  darkMode !== true ? darkMode = false : darkMode = true

  return (
    <>
      {carsSellerSelectPerPage!.map((car) => (
        <Link
          to={`/product/${car.id}`}
          key={car.id}
          onClick={() => {
            searchDataCar();
          }}
        >
          <CardContainer key={car.id}>
            <FigureContainer>
              <img src={car.imgCover} alt={car.model} />
            </FigureContainer>
            <ContainerInfo dark={darkMode!}>
              <h3 className="truncated-title">
                {car.brand} - {car.model}
              </h3>
              <DescriptionWithOverFlow dark={darkMode!}>
                <p>{car.description}</p>
              </DescriptionWithOverFlow>

              <ContactUserContainer dark={darkMode!}>
                <span>{car.user.name[0]}</span>
                <span className="name-car">{car.user.name}</span>
              </ContactUserContainer>
              <ContainerInfoCar dark={darkMode!}>
                <div>
                  <span>{car.km} KM</span>
                  <span>{car.year}</span>
                </div>
                <span>R$ {car.price}</span>
              </ContainerInfoCar>
            </ContainerInfo>
            {car.bestPrice && (
              <FlagGoodDeal>
                <TbFlag3Filled />
              </FlagGoodDeal>
            )}
          </CardContainer>
        </Link>
      ))}
    </>
  );
};

export default CardUserAds;
