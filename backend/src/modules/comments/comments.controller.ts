import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtauthGuard } from '../auth/jwt-auth.guard';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentsService } from './comments.service';
import { CommentPermissionGuard } from './guards/updateOrDeletePermission.guard';
import {
  CommentsSwagger,
  CommentsUserSwagger,
} from './swagger/comments.swagger';
import { BadRequestSwagger } from 'src/helpers/swagger/bad-request.swagger';
import { NotFoundSwagger } from 'src/helpers/swagger/not-found.swagger';
import { UnauthorizedSwagger } from 'src/helpers/swagger/unauthorized.swagger';

@ApiTags('Comments')
@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  @ApiOperation({ summary: 'Postar um comentário.' })
  @ApiResponse({
    status: 201,
    description: 'Comentário postado com sucesso!',
    type: CommentsUserSwagger,
  })
  @ApiResponse({
    status: 400,
    description: 'Parâmetros inválidos',
    type: BadRequestSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'Carro não encontrado',
    type: NotFoundSwagger,
  })
  @UseGuards(JwtauthGuard)
  @ApiBearerAuth()
  create(@Body() data: CreateCommentDto, @Request() req) {
    return this.commentsService.create(data, req.user.id);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os comentários.' })
  @ApiResponse({
    status: 200,
    description: 'Lista de comentários',
    type: CommentsUserSwagger,
    isArray: true,
  })
  findAll() {
    return this.commentsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Mostrar um comentário.' })
  @ApiResponse({
    status: 200,
    description: 'Comentário retornado com sucesso!',
    type: CommentsUserSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'Comentário não encontrado!',
    type: NotFoundSwagger,
  })
  findOne(@Param('id') id: string) {
    return this.commentsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Alterar um comentário.' })
  @ApiResponse({
    status: 200,
    description: 'Comentário alterado com sucesso!',
    type: CommentsSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'Comentário não encontrado!',
    type: NotFoundSwagger,
  })
  @ApiResponse({
    status: 401,
    description: 'Você não tem permissão para alterar o comentário.',
    type: UnauthorizedSwagger,
  })
  @UseGuards(JwtauthGuard, CommentPermissionGuard)
  update(@Param('id') id: string, @Body() data: UpdateCommentDto) {
    return this.commentsService.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar um comentário.' })
  @ApiResponse({
    status: 204,
    description: 'Comentário deletado com sucesso!',
  })
  @ApiResponse({
    status: 404,
    description: 'Comentário não encontrado!',
    type: NotFoundSwagger,
  })
  @ApiResponse({
    status: 401,
    description: 'Você não tem permissão para deletar o comentário.',
    type: UnauthorizedSwagger,
  })
  @UseGuards(JwtauthGuard, CommentPermissionGuard)
  remove(@Param('id') id: string) {
    return this.commentsService.remove(id);
  }
}
