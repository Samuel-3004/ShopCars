import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { compare } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validatedUser(userEmail: string, userPassword: string) {
    const user: User | null = await this.userService.findByEmail(userEmail);

    if (user) {
      const passwordMatch = await compare(userPassword, user.password);

      if (passwordMatch) {
        return { email: user.email };
      }
    }

    return null;
  }

  async login(email: string) {
    const user: User = await this.userService.findByEmail(email);

    return {
      token: this.jwtService.sign(
        { email, isAdm: user.isAdm, seller: user.seller },
        { subject: user.id },
      ),
      id: user.id,
      name: user.name,
      email: email,
      isAdm: user.isAdm,
      seller: user.seller,
    };
  }
}