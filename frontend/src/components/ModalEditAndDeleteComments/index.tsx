import { useContext } from "react";
import { Modal, ModalContainer, DivTitle, DivButtons, StyledTextarea } from "./style";
import { AiOutlineClose } from "react-icons/ai";
import { CommentContext } from "../../providers/CommentProvider/CommentContext";
import { Button } from "@material-ui/core";
import { ICommentUpdate } from "../../providers/CommentProvider/@types";
import { useForm } from "react-hook-form";

export const ModalEditAndDeleteComments = () => {
  const { setIsModalComment, commentOneById, editeComment, deleteComment } =
    useContext(CommentContext);

  const { register, handleSubmit } = useForm<ICommentUpdate>();

  const updateComment = (data: ICommentUpdate) => {
    editeComment(data, commentOneById!.id);
  };

  return (
    <ModalContainer>
      <Modal>
        <DivTitle>
          <h2>Comentário</h2>
          <AiOutlineClose
            onClick={() => setIsModalComment(false)}
            className="close-btn-modalComments"
          />
        </DivTitle>
        <StyledTextarea 
          id="outlined-basic"
          aria-label="comment"
          minRows={3}
          // variant="outlined"
          placeholder={commentOneById?.description}
          // size="small"
          defaultValue={commentOneById?.description}
          {...register("description")}
          className="input-modal-comments"
        />
        <DivButtons>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleSubmit(updateComment)}
          >
            Atualizar
          </Button>
          <Button
            variant="contained"
            color="secondary"
            type="button"
            onClick={() => deleteComment(commentOneById!.id)}
          >
            Deletar
          </Button>
        </DivButtons>
      </Modal>
    </ModalContainer>
  );
};
