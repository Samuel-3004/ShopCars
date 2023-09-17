import { Comment, User } from "@prisma/client";

export interface ICommentUser extends Comment {
    user: User
}