import Footer from "../../components/Footer";
import LoginForm from "../../components/LoginForm";
import { Header } from "../../components/Header";
import { BodyContainerHome } from "../Home/style";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider/UserContext";

const Login = () => {
  const { darkMode } = useContext(UserContext);

  return (
    <>
      <BodyContainerHome dark={darkMode!}>
        <Header />
        <LoginForm />
        <Footer />
      </BodyContainerHome>
    </>
  );
};

export default Login;
