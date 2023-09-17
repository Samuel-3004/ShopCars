import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import {
  ICommentContext,
  ICommentUpdate,
  IDefaultProviderProps,
  TCommentRequest,
  TCommentUserResponse,
} from "./@types";

export const CommentContext = createContext({} as ICommentContext);

export const CommentProvider = ({ children }: IDefaultProviderProps) => {
  const [allComments, setAllComments] = useState<TCommentUserResponse[] | []>(
    []
  );
  const [commentsCarId, setCommentsCarId] = useState<
    TCommentUserResponse[] | []
  >([]);

  const [isModalComment, setIsModalComment] = useState<boolean>(false);
  const [commentOneById, setCommentOneById] =
    useState<TCommentUserResponse | null>(null);

  useEffect(() => {
    const allComments = async () => {
      try {
        const response = await api.get<TCommentUserResponse[] | []>(
          `/comments`
        );
        setAllComments(response.data);
        localStorage.setItem("@allCommentsCar", JSON.stringify(response.data));
      } catch (error) {
        console.log(error);
      }
    };

    allComments();
  }, [commentsCarId]);

  const registerComment = async (formData: TCommentRequest) => {
    const token = localStorage.getItem("@userToken");

    const commentsCarFounded: TCommentUserResponse[] | null = JSON.parse(
      localStorage.getItem("@commentsCarSelect") || "null"
    );

    if (token) {
      try {
        const response = await api.post<TCommentUserResponse>(
          "/comments",
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (commentsCarFounded!.length === 0) {
          const commentsRefresh = [...commentsCarFounded!, response.data];
          setCommentsCarId(commentsRefresh);
          localStorage.setItem(
            "@commentsCarSelect",
            JSON.stringify(commentsRefresh)
          );
        } else {
          const commentsRefresh = [...commentsCarFounded!, response.data];
          setCommentsCarId(commentsRefresh);
          localStorage.setItem(
            "@commentsCarSelect",
            JSON.stringify(commentsRefresh)
          );
        }
        toast.success("Comment registered!");
      } catch (error) {
        console.log(error);

        toast.error("Comment was not registered!");
      }
    }
  };

  const editeComment = async (formData: ICommentUpdate, commentId: string) => {
    const token = localStorage.getItem("@userToken");

    if (token) {
      try {
        const response = await api.patch<TCommentUserResponse>(
          `/comments/${commentId}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const newListComments = commentsCarId.map((comment) => {
          if (comment.id === commentId) {
            return { ...comment, ...response.data };
          } else {
            return comment;
          }
        });

        localStorage.setItem(
          "@commentsCarSelect",
          JSON.stringify(newListComments)
        );

        setCommentsCarId(newListComments);
        setIsModalComment(false);

        toast.success("Successfully changed!");
      } catch (error) {
        toast.error("Something went wrong!");
      }
    }
  };

  const deleteComment = async (commentId: string) => {
    const token = localStorage.getItem("@userToken");

    if (token) {
      try {
        await api.delete(`/comments/${commentId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const commentFind = commentsCarId.find(
          (comment) => comment.id === commentId
        );

        if (!commentFind) {
          toast.error("Comment Not Found!");
        } else {
          const newListComments = commentsCarId.filter((comment) => {
            if (comment !== commentFind) {
              return comment;
            }
          });
          localStorage.setItem(
            "@commentsCarSelect",
            JSON.stringify(newListComments)
          );

          setCommentsCarId(newListComments);
          setIsModalComment(false);
          toast.success("Successfully deleted!");
        }
      } catch (error) {
        console.log(error);

        toast.error("Unable to delete comment!");
      }
    }
  };

  return (
    <CommentContext.Provider
      value={{
        allComments,
        commentsCarId,
        isModalComment,
        commentOneById,
        setAllComments,
        setCommentOneById,
        setCommentsCarId,
        setIsModalComment,
        registerComment,
        editeComment,
        deleteComment,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};
