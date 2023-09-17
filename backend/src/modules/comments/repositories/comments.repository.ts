import { Comment } from '../entities/comment.entity';
import { CreateCommentDto } from '../dto/create-comment.dto';
import { UpdateCommentDto } from '../dto/update-comment.dto';
import { ICommentUser } from '../interfaces/comments.interfaces';

export abstract class CommentsRepository {
  abstract create(data: CreateCommentDto, userId: string): Promise<ICommentUser>;
  abstract findAll(): Promise<ICommentUser[] | []>;
  abstract findOne(id: string): Promise<ICommentUser>;
  abstract update(id: string, data: UpdateCommentDto): Promise<Comment>;
  abstract delete(id: string): Promise<void>;
}
