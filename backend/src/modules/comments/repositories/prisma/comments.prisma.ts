import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateCommentDto } from '../../dto/create-comment.dto';
import { UpdateCommentDto } from '../../dto/update-comment.dto';
import { Comment } from '../../entities/comment.entity';
import { CommentsRepository } from '../comments.repository';
import { Car } from '@prisma/client';
import { ICommentUser } from '../../interfaces/comments.interfaces';

@Injectable()
export class CommentsPrismaRepository implements CommentsRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCommentDto, userId: string): Promise<ICommentUser> {
    const comment: Comment = new Comment();

    const car: Car | null = await this.prisma.car.findFirst({
      where: { id: data.carId },
    });

    if (!car) {
      throw new NotFoundException('Car not found');
    }

    comment.carId = data.carId;
    comment.description = data.description;
    comment.userId = userId;
    comment.createdAtString = '0 segundos';

    const newComment: ICommentUser= await this.prisma.comment.create({
      data: {
        ...comment,
      },
      include: {
        user: true,
      },
    });

    return newComment;
  }

  async findAll(): Promise<ICommentUser[] | []> {
    const comments: ICommentUser[] | [] = await this.prisma.comment.findMany({
      include: {
        user: true,
      },
    });

    return comments;
  }

  async findOne(id: string): Promise<ICommentUser> {
    const comment: ICommentUser | null = await this.prisma.comment.findFirst({
      where: { id },
      include: {
        user: true,
      },
    });

    return comment;
  }

  async update(id: string, data: UpdateCommentDto): Promise<Comment> {
    const comment: Comment | null = await this.prisma.comment.update({
      where: { id },
      data: { ...data },
    });

    const currentDate = new Date();
    const newComments = [];

    const postDate = new Date(comment.createdAt);
    const result: number = Number(currentDate) - Number(postDate);

    const segundos = Math.floor(result / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);

    if (segundos < 60 && minutos <= 0) {
      newComments.push({
        ...comment,
        createdAtString: `${segundos} segundos`,
      });
    }
    if (minutos < 60 && segundos >= 60) {
      newComments.push({
        ...comment,
        createdAtString: `${minutos} minutos`,
      });
    }
    if (horas > 0 && minutos >= 60) {
      newComments.push({
        ...comment,
        createdAtString: `${horas} horas`,
      });
    }
    if (dias > 0 && horas >= 24) {
      newComments.push({
        ...comment,
        createdAtString: `${dias}`,
      });
    }

    return newComments[0];
  }

  async delete(id: string): Promise<void> {
    await this.prisma.comment.delete({
      where: { id },
    });
  }
}
