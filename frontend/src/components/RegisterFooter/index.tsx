import { BsArrowUpCircleFill } from "react-icons/bs";
import { ButtonToBeginning, FooterContainer } from "./style";

const RegisterFooter = () => {
  return (
    <FooterContainer>
      <h3>Motors shop</h3>
      <p>® 2023 - Todos os direitos reservados.</p>
      <ButtonToBeginning onClick={() => window.scrollTo(0, 0)}>
        <BsArrowUpCircleFill />
      </ButtonToBeginning>
    </FooterContainer>
  );
};

export default RegisterFooter;
