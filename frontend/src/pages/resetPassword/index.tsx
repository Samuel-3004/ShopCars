import { useParams } from "react-router-dom";
import ResetPasswordForm from "../../components/ModalResetPassword";
import ResetPasswordFooter from "../../components/ResetPasswordFooter";
import ResetPasswordHeader from "../../components/ResetPasswordHeader";
import { BodyContainerHome } from "./style";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider/UserContext";

const ResetPasswordPage = () => {
  const { token } = useParams();
  const { darkMode, setDarkMode } = useContext(UserContext);

  darkMode !== true ? setDarkMode(false) : setDarkMode(true);
  
  return (
    <>
      <BodyContainerHome dark={darkMode!}>
        <ResetPasswordHeader />
        <ResetPasswordForm token={token as string} />
        <ResetPasswordFooter />
      </BodyContainerHome>
    </>
  );
};

export default ResetPasswordPage;
