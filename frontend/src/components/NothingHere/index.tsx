import { TbPhotoSearch } from "react-icons/tb";
import { NothingHereContainer } from "./style";

const NothingHere = () => {
  return (
    <NothingHereContainer>
      <TbPhotoSearch />
      <p>Nenhum carro cadastrado ainda :(</p>
    </NothingHereContainer>
  );
};

export default NothingHere;
