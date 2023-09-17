import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { UnauthorizedException } from '@nestjs/common';
import { User } from 'src/modules/users/entities/user.entity';
import { PrismaService } from 'src/database/prisma.service';

export class CreateCarException extends UnauthorizedException {
  constructor() {
    super('You do not have permission to access this resource');
  }
}

@Injectable()
export class CreateCarPermissionGuard implements CanActivate {
  constructor(private prisma: PrismaService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();

    const user: User = request.user as User;

    const isSeller: boolean = user.seller

    if (!isSeller) {
      throw new CreateCarException();
    }
    
    return true;
  }

  
}
