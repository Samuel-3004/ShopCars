import { BsArrowUpCircleFill } from "react-icons/bs";
import { ButtonToBeginning, FooterContainer } from "./style";
import { useEffect, useState } from "react";

const Footer = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <FooterContainer>
      <h3>Motors shop</h3>
      <p>® 2023 - Todos os direitos reservados.</p>
      <ButtonToBeginning onClick={scrollToTop}>
        <BsArrowUpCircleFill />
      </ButtonToBeginning>
    </FooterContainer>
  );
};

export default Footer;
