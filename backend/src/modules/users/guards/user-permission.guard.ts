import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { UnauthorizedException } from '@nestjs/common';
import { User } from '../entities/user.entity';

export class UserPermissionException extends UnauthorizedException {
  constructor() {
    super('You do not have permission to access this resource.');
  }
}

@Injectable()
export class UserPermissionGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const user: User = request.user as User;
    const userId = user.id;
    const id = request.params.id;

    if (userId !== id) {
      throw new UserPermissionException();
    }
    return true;
  }
}
