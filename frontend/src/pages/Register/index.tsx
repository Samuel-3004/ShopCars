import Footer from "../../components/Footer";
import RegisteForm from "../../components/RegisterForm";
import RegisterHeader from "../../components/RegisterHeader";
import { UserContext } from "../../providers/UserProvider/UserContext";
import { BodyContainerHome } from "./style";
import { useContext } from "react";

const Register = () => {
  const { darkMode } = useContext(UserContext);

  return (
    <>
      <BodyContainerHome dark={darkMode}>
        <RegisterHeader />
        <RegisteForm />
        <Footer />
      </BodyContainerHome>
    </>
  );
};

export default Register;
