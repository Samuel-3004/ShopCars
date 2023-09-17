import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { IEmail } from './interfaces/auth.interfaces';
import { Strategy } from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {super({
      usernameField: 'email',
      passwordField: 'password',
    });
  }

  async validate(email: string, password: string) {
    const user: IEmail | null = await this.authService.validatedUser(
      email,
      password,
    );

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }
    return user;
  }
}
