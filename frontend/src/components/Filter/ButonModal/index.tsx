import { useContext } from "react";
import { ButtonFilter } from "./style";
import { HomeContext } from "../../../providers/HomeProvider/HomeProvider";

const ButtonHome = () => {
  const { setModalFilter } = useContext(HomeContext);

  return (
    <ButtonFilter
      onClick={() => {
        setModalFilter(true);
      }}
    >
      Filtros
    </ButtonFilter>
  );
};

export default ButtonHome;
