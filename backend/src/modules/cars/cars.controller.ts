import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UseGuards,
  Query,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtauthGuard } from '../auth/jwt-auth.guard';
import { CarPermissionGuard } from './guards/car-permission.guard';
import {
  CarSwagger,
  CarsPaginationSwagger,
  CarRelationsSwagger,
} from './swagger/cars.swagger';
import { BadRequestSwagger } from 'src/helpers/swagger/bad-request.swagger';
import { NotFoundSwagger } from 'src/helpers/swagger/not-found.swagger';
import { UnauthorizedSwagger } from 'src/helpers/swagger/unauthorized.swagger';

@ApiTags('Cars')
@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Post()
  @ApiOperation({ summary: 'Cadastrar um carro que será anunciado.' })
  @ApiResponse({
    status: 201,
    description: 'O carro foi cadastrado com sucesso!',
    type: CarSwagger,
  })
  @ApiResponse({
    status: 401,
    description: 'Você não tem permissão para registrar um carro.',
    type: UnauthorizedSwagger,
  })
  @ApiResponse({
    status: 400,
    description: 'Parâmetros inválidos',
    type: BadRequestSwagger,
  })
  @UseGuards(JwtauthGuard)
  @ApiBearerAuth()
  create(@Body() data: CreateCarDto, @Request() req) {
    return this.carsService.create(data, req.user.id);
  }

  @Get('/pagination')
  @ApiOperation({
    summary:
      'Listar todos os carros anunciados, sendo mostrados de 12 em 12 por página.',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de todos os carros!',
    type: CarsPaginationSwagger,
  })
  findAll(@Query('page') page = 1, perPage = 12) {
    return this.carsService.findAll(page, perPage);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todos os carros anunciados.' })
  @ApiResponse({
    status: 200,
    description: 'Lista de todos os carros!',
    type: CarRelationsSwagger,
    isArray: true,
  })
  findAllCars() {
    return this.carsService.findAllCars();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Listar as informações de um carro que foi anunciado.',
  })
  @ApiResponse({
    status: 200,
    description: 'Dados do carro retornado com sucesso!',
    type: CarRelationsSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'Carro não encontrado!',
    type: NotFoundSwagger,
  })
  findOne(@Param('id') id: string) {
    return this.carsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Editar as informações de um carro que foi anunciado.',
  })
  @ApiResponse({
    status: 200,
    description: 'Dados do carro atualizados com sucesso!',
    type: CarRelationsSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'Carro não encontrado!',
    type: NotFoundSwagger,
  })
  @ApiResponse({
    status: 401,
    description: 'Você não tem permissão para editar os dados do carro.',
    type: UnauthorizedSwagger,
  })
  @UseGuards(JwtauthGuard, CarPermissionGuard)
  update(@Param('id') id: string, @Body() data: UpdateCarDto) {
    return this.carsService.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Deletar as informações de um carro que foi anunciado.',
  })
  @ApiResponse({
    status: 204,
    description: 'Dados do carro deletados com sucesso!',
  })
  @ApiResponse({
    status: 404,
    description: 'Carro não encontrado!',
    type: NotFoundSwagger,
  })
  @ApiResponse({
    status: 401,
    description: 'Você não tem permissão para deletar os dados do carro.',
    type: UnauthorizedSwagger,
  })
  @UseGuards(JwtauthGuard, CarPermissionGuard)
  remove(@Param('id') id: string) {
    return this.carsService.remove(id);
  }
}
