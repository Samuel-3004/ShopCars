import { BsArrowUpCircleFill } from "react-icons/bs";
import { ButtonToBeginning, FooterContainer } from "./style";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider/UserContext";

const ResetPasswordFooter = () => {
  const { darkMode, setDarkMode } = useContext(UserContext);

  darkMode !== true ? setDarkMode(false) : setDarkMode(true);

  return (
    <FooterContainer dark={darkMode}>
      <h3>Motors shop</h3>
      <p>® 2023 - Todos os direitos reservados.</p>
      <ButtonToBeginning
        type="button"
        onClick={() => window.scrollTo(0, 0)}
        dark={darkMode}
      >
        <BsArrowUpCircleFill />
      </ButtonToBeginning>
    </FooterContainer>
  );
};

export default ResetPasswordFooter;
