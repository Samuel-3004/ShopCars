import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ImagesService } from './images.service';
import { CreateImageDto } from './dto/create-image.dto';

import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtauthGuard } from '../auth/jwt-auth.guard';
import { UpdateImageDto } from './dto/update-image.dto';
import { CarUserPermissionGuard } from './guards/images-permission.guard';
import { ImagePermissionGuard } from './guards/UpdateOrDeletePermissions.guard';
import { ImageSwagger } from './swagger/images.swagger';
import { BadRequestSwagger } from 'src/helpers/swagger/bad-request.swagger';
import { NotFoundSwagger } from 'src/helpers/swagger/not-found.swagger';
import { UnauthorizedSwagger } from 'src/helpers/swagger/unauthorized.swagger';

@ApiTags('Images')
@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Post()
  @ApiOperation({
    summary: 'Postar uma imagem vinculada a um carro anunciado.',
  })
  @ApiResponse({
    status: 201,
    description: 'A imagem foi postada com sucesso!',
    type: ImageSwagger,
  })
  @ApiResponse({
    status: 401,
    description:
      'Você não tem permissão para postar uma imagem para esse carro.',
    type: UnauthorizedSwagger,
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
  @UseGuards(JwtauthGuard, CarUserPermissionGuard)
  @ApiBearerAuth()
  create(@Body() data: CreateImageDto) {
    return this.imagesService.create(data);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as imagens dos carros anunciados.' })
  @ApiResponse({
    status: 200,
    description: 'Lista de imagens.',
    type: ImageSwagger,
    isArray: true,
  })
  findAll() {
    return this.imagesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Mostrar uma imagem de um carro anunciado.' })
  @ApiResponse({
    status: 200,
    description: 'Imagem retornada com sucesso!',
    type: ImageSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'Imagem não encontrada!',
    type: NotFoundSwagger,
  })
  findOne(@Param('id') id: string) {
    return this.imagesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Alterar uma imagem de um carro anunciado.' })
  @ApiResponse({
    status: 200,
    description: 'Imagem alterada com sucesso!',
    type: ImageSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'Imagem não encontrada!',
    type: NotFoundSwagger,
  })
  @ApiResponse({
    status: 401,
    description: 'Você não tem permissão para alterar a imagem.',
    type: UnauthorizedSwagger,
  })
  @UseGuards(JwtauthGuard, ImagePermissionGuard)
  update(@Param('id') id: string, @Body() data: UpdateImageDto) {
    return this.imagesService.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Alterar uma imagem de um carro anunciado.' })
  @ApiResponse({
    status: 204,
    description: 'Imagem deletada com sucesso!',
  })
  @ApiResponse({
    status: 404,
    description: 'Imagem não encontrada!',
    type: NotFoundSwagger,
  })
  @ApiResponse({
    status: 401,
    description: 'Você não tem permissão para deletar a imagem.',
    type: UnauthorizedSwagger,
  })
  @UseGuards(JwtauthGuard, ImagePermissionGuard)
  remove(@Param('id') id: string) {
    return this.imagesService.remove(id);
  }
}
