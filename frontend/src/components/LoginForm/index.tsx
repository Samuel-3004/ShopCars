import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ButtonContainer,
  ButtonToRegister,
  FieldsetLogin,
  ForgotMyPassword,
  FormLoginContainer,
  MainContainerLogin,
  TitleLogin,
  Error,
} from "./style";
import { ILogin } from "../../providers/UserProvider/@types";
import { SubmitHandler, useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserProvider/UserContext";
import ModalSendEmail from "../ModalSendEmail";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import Loading from "../Loading";

const LoginForm = () => {
  const { userLogin, loading } = useContext(UserContext);
  const [showPass, setShowPass] = useState<"text" | "password">("password");

  let darkMode: boolean | null = JSON.parse(
    localStorage.getItem("@darkMode") || "null"
  );

  darkMode !== true ? (darkMode = false) : (darkMode = true);

  const schema = z.object({
    email: z.string().email("Deve ser um e-mail"),
    password: z.string().nonempty("Senha é obrigatória"),
  });

  const { modalForgottenOpen, setModalForgottenOpen } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ILogin>({
    resolver: zodResolver(schema),
  });

  const submit: SubmitHandler<ILogin> = async (data: ILogin) => {
    await userLogin(data);
  };

  const togglePassVisibility = (): void => {
    if (showPass === "password") {
      setShowPass("text");
    } else {
      setShowPass("password");
    }
  };

  return (
    <MainContainerLogin>
      {modalForgottenOpen && <ModalSendEmail />}
      <FormLoginContainer onSubmit={handleSubmit(submit)} dark={darkMode!}>
        <TitleLogin dark={darkMode!}>
          <h3>Login</h3>
        </TitleLogin>
        <FieldsetLogin dark={darkMode!}>
          <label>Email</label>
          <input
            type="email"
            placeholder="johndoe@mail.com"
            {...register("email")}
          />
          {errors.email?.message ? (
            <Error>{errors.email.message} *</Error>
          ) : null}
        </FieldsetLogin>
        <FieldsetLogin dark={darkMode!}>
          <label>Password</label>
          <input
            type={showPass}
            placeholder="Your password"
            {...register("password")}
          />
          {errors.password?.message ? (
            <Error>{errors.password.message} *</Error>
          ) : null}
          {showPass === "password" ? (
            <BsEyeFill onClick={() => togglePassVisibility()} />
          ) : (
            <BsEyeSlashFill onClick={() => togglePassVisibility()} />
          )}
        </FieldsetLogin>
        <ForgotMyPassword dark={darkMode!}>
          <span
            onClick={() => {
              setModalForgottenOpen(true);
            }}
          >
            Esqueceu sua senha?
          </span>
        </ForgotMyPassword>
        <ButtonContainer dark={darkMode!}>
          <button type="submit" disabled={loading || !isValid}>
            {loading ? <Loading /> : "Entrar"}
          </button>
          <ButtonToRegister to="/register" dark={darkMode!}>
            Cadastrar
          </ButtonToRegister>
        </ButtonContainer>
      </FormLoginContainer>
    </MainContainerLogin>
  );
};

export default LoginForm;
