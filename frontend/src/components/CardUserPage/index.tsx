import { useContext } from "react";
import {
  CardContainer,
  ContactUserContainer,
  ContainerInfo,
  ContainerInfoCar,
  FigureContainer,
  FlagGoodDeal,
  DescriptionWithOverFlow,
} from "./style";
import NothingHere from "../NothingHere";
import { BiSolidBadgeDollar } from "react-icons/bi";
import { UserContext } from "../../providers/UserProvider/UserContext";
import { Link } from "react-router-dom";
import { convertNumberToLocaleString } from "../UpdateOrDeleteCarModal/utils";

const CardUserProfile = () => {
  const { allCarsCommonProfilePerPage } = useContext(UserContext);

  if (allCarsCommonProfilePerPage.length === 0) return <NothingHere />;

  let darkMode: boolean | null = JSON.parse(
    localStorage.getItem("@darkMode") || "null"
  );

  darkMode !== true ? darkMode = false : darkMode = true

  return (
    <>
      {allCarsCommonProfilePerPage.map((car) => (
        <Link to={`/product/${car.id}`} key={car.id}>
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
                <span>{car.user.name}</span>
              </ContactUserContainer>
              <ContainerInfoCar dark={darkMode!}>
                <div>
                  <span>{convertNumberToLocaleString(car.km)} KM</span>
                  <span>{car.year}</span>
                </div>
                <span>R$ {convertNumberToLocaleString(car.price)}</span>
              </ContainerInfoCar>
            </ContainerInfo>
            {car.bestPrice && (
              <FlagGoodDeal>
                <BiSolidBadgeDollar />
              </FlagGoodDeal>
            )}
          </CardContainer>
        </Link>
      ))}
    </>
  );
};

export default CardUserProfile;
