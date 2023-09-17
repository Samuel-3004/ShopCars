import { Injectable, NotFoundException } from '@nestjs/common';
import { CommentsRepository } from './repositories/comments.repository';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { ICommentUser } from './interfaces/comments.interfaces';


@Injectable()
export class CommentsService {
  constructor(private commentsRepository: CommentsRepository) {}

  async create(data: CreateCommentDto, userId: string) {
    return await this.commentsRepository.create(data, userId);
  }

  async findAll() {
    const comments: ICommentUser[] | [] = await this.commentsRepository.findAll();
    const currentDate = new Date();
    const newComments = [];

    comments.map((comment) => {
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
      if (horas > 0 && horas < 24 && minutos >= 60) {
        newComments.push({
          ...comment,
          createdAtString: `${horas} horas`,
        });
      }
      if (dias > 0 && horas >= 24) {
        newComments.push({
          ...comment,
          createdAtString: `${dias} dias`,
        });
      }
    });

    return newComments;
    
  }

  async findOne(id: string) {
    const comment: ICommentUser | null = await this.commentsRepository.findOne(id);
    if (!comment) {
      throw new NotFoundException('Comment not found');
    }
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

  async update(id: string, updateCommentDto: UpdateCommentDto) {
    const comment: ICommentUser | null = await this.commentsRepository.findOne(id);

    if (!comment) {
      throw new NotFoundException('Comment not found');
    }

    return this.commentsRepository.update(id, updateCommentDto);
  }

  async remove(id: string) {
    const findcomment: ICommentUser | null = await this.commentsRepository.findOne(id);

    if (!findcomment) {
      throw new NotFoundException('Comment not found');
    }

    return this.commentsRepository.delete(id);
  }
}
