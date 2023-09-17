import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider/UserContext";

import {
  DivContainerModal,
  FieldsetModal,
  FormModalContainer,
  ModalButtonContainer,
  SpanCloseModalForgotten,
  TitleModal,
} from "./style";
import { ResetEmailData, SendEmailSchema } from "./@types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const ModalSendEmail = () => {
  const { setModalForgottenOpen, sendEmail } = useContext(UserContext);
  const { register, handleSubmit } = useForm<ResetEmailData>({
    resolver: zodResolver(SendEmailSchema),
  });

  const onFormSubmit = (formData: ResetEmailData) => {
    sendEmail(formData);
  };

  const closeModalSendEmail = () => {
    setTimeout(function () {
      setModalForgottenOpen(false);
    }, 5000);
  };

  return (
    <DivContainerModal>
      <FormModalContainer onSubmit={handleSubmit(onFormSubmit)}>
        <SpanCloseModalForgotten
          onClick={() => {
            setModalForgottenOpen(false);
          }}
        >
          X
        </SpanCloseModalForgotten>
        <TitleModal>
          <h2>Recuperação de Senha</h2>
        </TitleModal>
        <FieldsetModal>
          <label htmlFor="email">
            Informe o email apra a recuperação de senha
          </label>
          <input
            type="email"
            className="emailForgotten"
            id="emailForgotten"
            placeholder="Digite seu email aqui..."
            {...register("email")}
          />
        </FieldsetModal>
        <ModalButtonContainer>
          <button type="submit" onClick={() => closeModalSendEmail()}>Enviar</button>
        </ModalButtonContainer>
      </FormModalContainer>
    </DivContainerModal>
  );
};

export default ModalSendEmail;
