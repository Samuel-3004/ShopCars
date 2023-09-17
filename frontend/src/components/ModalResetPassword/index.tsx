import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider/UserContext";

import {
  DivContainerModal,
  FieldsetModal,
  FormModalContainer,
  ModalButtonContainer,
  TitleModal,
} from "./style";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ResetPasswordData,
  ResetPasswordProps,
  ResetPasswordSchema,
} from "./@types";

const ResetPasswordForm = ({ token }: ResetPasswordProps) => {
  const { resetPassword, darkMode, setDarkMode } = useContext(UserContext);
  const { register, handleSubmit } = useForm<ResetPasswordData>({
    resolver: zodResolver(ResetPasswordSchema),
  });

  const onFormSubmit = (formData: ResetPasswordData) => {
    resetPassword(formData, token);
  };

  darkMode !== true ? setDarkMode(false) : setDarkMode(true);

  return (
    <DivContainerModal dark={darkMode}>
      <FormModalContainer onSubmit={handleSubmit(onFormSubmit)} dark={darkMode}>
        <TitleModal dark={darkMode}>
          <h2>Recuperação de Senha</h2>
        </TitleModal>
        <FieldsetModal dark={darkMode}>
          <label htmlFor="password">Digite a Nova Senha</label>
          <input
            type="password"
            className="passwordForgotten"
            id="passwordForgotten"
            placeholder="Nova senha"
            {...register("password")}
          />
        </FieldsetModal>
        <FieldsetModal dark={darkMode}>
          <label htmlFor="passwordConfirm">Nova Senha</label>
          <input
            type="password"
            className="passwordConfirm"
            id="passwordConfirm"
            placeholder="Confirme a senha"
            {...register("passwordConfirm")}
          />
        </FieldsetModal>
        <ModalButtonContainer dark={darkMode}>
          <button type="submit">Redefinir senha</button>
        </ModalButtonContainer>
      </FormModalContainer>
    </DivContainerModal>
  );
};

export default ResetPasswordForm;
