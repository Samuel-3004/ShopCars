import { Injectable, CanActivate, ExecutionContext, NotFoundException } from '@nestjs/common';
import { Request } from 'express';
import { UnauthorizedException } from '@nestjs/common';
import { User } from 'src/modules/users/entities/user.entity';
import { PrismaService } from 'src/database/prisma.service';

export class CommentUserPermissionException extends UnauthorizedException {
  constructor() {
    super('Car does not belong to the user');
  }
}

@Injectable()
export class CommentPermissionGuard implements CanActivate {
  constructor(private prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();

    const user: User = request.user as User;
    
    const userId = user.id;

    const idComment = request.params.id

    const comment = await this.prisma.comment.findFirst({
        where: {
            id: idComment
        }
    })

    if(!comment){
      throw new NotFoundException("Comment not found");
    }

    if(comment.userId != userId) {
      throw new UnauthorizedException("You do not have permission to access this feature");
    }
    
    return true;
  }
}
