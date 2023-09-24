import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  UseGuards,
  UseInterceptors,
  ClassSerializerInterceptor,
  HttpCode,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtauthGuard } from '../auth/jwt-auth.guard';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserPermissionGuard } from './guards/user-permission.guard';
import { UserAdmPermissionGuard } from './guards/userAdm-permission.guard';
import {
  InformEmailDto,
  InformNewPasswordDto,
  TokenDto,
} from './dto/send-email.dto';
import {
  UserIdSwagger,
  UserProfileSwagger,
  UserSwagger,
} from './swagger/users.swagger';
import { ConflictSwagger } from 'src/helpers/swagger/conflict.swagger';
import { BadRequestSwagger } from 'src/helpers/swagger/bad-request.swagger';
import { NotFoundSwagger } from 'src/helpers/swagger/not-found.swagger';
import { UnauthorizedSwagger } from 'src/helpers/swagger/unauthorized.swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Post()
  @ApiOperation({ summary: 'Cadastrar novos usuários.' })
  @ApiResponse({
    status: 201,
    description: 'O usuário cadastrado com sucesso!',
    type: UserSwagger,
  })
  @ApiResponse({
    status: 409,
    description: 'O usuário já está cadastrado!',
    type: ConflictSwagger,
  })
  @ApiResponse({
    status: 400,
    description: 'Parâmetros inválidos',
    type: BadRequestSwagger,
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  @ApiOperation({ summary: 'Listar todos os usuários.' })
  @ApiResponse({
    status: 200,
    description: 'Lista de usuários',
    type: UserSwagger,
    isArray: true,
  })
  @UseGuards(JwtauthGuard, UserAdmPermissionGuard)
  @ApiBearerAuth()
  findAll() {
    return this.usersService.findAll();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('profile')
  @ApiOperation({
    summary: 'Listar todos os veículos pertencentes a todos os usuários.',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de usuários',
    type: UserProfileSwagger,
    isArray: true,
  })
  findAllProfile() {
    return this.usersService.findAllProfile();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id')
  @ApiOperation({ summary: 'Listar dados de um usuário.' })
  @ApiResponse({
    status: 200,
    description: 'Dados do usuário retornados com sucesso!',
    type: UserIdSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'Usuário não encontrado!',
    type: NotFoundSwagger,
  })
  @ApiResponse({
    status: 401,
    description: 'Você não tem permissão de acessar os dados do usuário.',
    type: UnauthorizedSwagger,
  })
  @UseGuards(JwtauthGuard, UserPermissionGuard)
  @ApiBearerAuth()
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.usersService.findOne(id);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Patch(':id')
  @ApiOperation({ summary: 'Editar dados de um usuário.' })
  @ApiResponse({
    status: 200,
    description: 'Dados do usuário alterados com sucesso!',
    type: UserIdSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'Usuário não encontrado!',
    type: NotFoundSwagger,
  })
  @ApiResponse({
    status: 401,
    description: 'Você não tem permissão de acessar os dados do usuário.',
    type: UnauthorizedSwagger,
  })
  @UseGuards(JwtauthGuard, UserPermissionGuard)
  @ApiBearerAuth()
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Delete(':id')
  @ApiOperation({ summary: 'Deletar dados de um usuário.' })
  @ApiResponse({
    status: 204,
    description: 'Usuário deletado com sucesso!',
  })
  @ApiResponse({
    status: 404,
    description: 'Usuário não encontrado!',
    type: NotFoundSwagger,
  })
  @ApiResponse({
    status: 401,
    description: 'Você não tem permissão para deletar o usuário.',
    type: UnauthorizedSwagger,
  })
  @UseGuards(JwtauthGuard)
  @ApiBearerAuth()
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }

  @HttpCode(200)
  @Post('resetPassword')
  @ApiOperation({ summary: 'Enviar e-mail de recuperação de senha.' })
  @ApiResponse({
    status: 200,
    description: 'E-mail enviado com sucesso!',
  })
  @ApiResponse({
    status: 404,
    description: 'Usuário não encontrado!',
    type: NotFoundSwagger,
  })
  async sendEmailResetPassword(@Body() informEmailDto: InformEmailDto) {
    await this.usersService.sendEmailResetPassword(informEmailDto);
    return { message: 'token send' };
  }

  @Patch('resetPassword/:token')
  @ApiOperation({ summary: 'Editar a senha de um usuário.' })
  @ApiResponse({
    status: 200,
    description: 'Senha alterada com sucesso!',
  })
  @ApiResponse({
    status: 404,
    description: 'Usuário não encontrado!',
    type: NotFoundSwagger,
  })
  async resetPassword(
    @Param() tokenDto: TokenDto,
    @Body() informNewPasswordDto: InformNewPasswordDto,
  ) {
    await this.usersService.resetPassword(informNewPasswordDto, tokenDto);

    return { message: 'Password change with sucess!' };
  }
}
