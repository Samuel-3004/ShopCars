import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';

import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LocalStrategy } from './local.strategy';
import { LoginSwagger } from './swagger/login.swagger';
import { UnauthorizedSwagger } from 'src/helpers/swagger/unauthorized.swagger';

@ApiTags('Login')
@Controller('login')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly localStrategy: LocalStrategy,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Acessar aplicativo' })
  @ApiResponse({
    status: 201,
    description: 'Usuário logado com sucesso!',
    type: LoginSwagger,
  })
  @ApiResponse({
    status: 401,
    description: 'Email e/ou senha incorretos!',
    type: UnauthorizedSwagger,
  })
  async login(@Body() user: LoginDto) {
    await this.localStrategy.validate(user.email, user.password);

    return this.authService.login(user.email);
  }
}
