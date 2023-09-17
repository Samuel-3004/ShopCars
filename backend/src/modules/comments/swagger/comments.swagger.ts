import { ApiProperty } from "@nestjs/swagger";
import { Comment } from "../entities/comment.entity";
import { UserSwagger } from "src/modules/users/swagger/users.swagger";

export class CommentsSwagger extends Comment {}

export class CommentsUserSwagger extends CommentsSwagger {
  @ApiProperty({ type: () => UserSwagger })
  user: UserSwagger;
}