import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { PrismaService } from 'src/database/prisma.service';
import { CommentsRepository } from './repositories/comments.repository';
import { CommentsPrismaRepository } from './repositories/prisma/comments.prisma';

@Module({
  controllers: [CommentsController],
  providers: [
    CommentsService,
    PrismaService,
    {
      provide: CommentsRepository,
      useClass: CommentsPrismaRepository,
    },
  ],
})
export class CommentsModule {}
