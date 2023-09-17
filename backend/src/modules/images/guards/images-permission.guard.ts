import { Injectable, CanActivate, ExecutionContext, NotFoundException } from '@nestjs/common';
import { Request } from 'express';
import { UnauthorizedException } from '@nestjs/common';
import { User } from 'src/modules/users/entities/user.entity';
import { PrismaService } from 'src/database/prisma.service';

export class CarUserPermissionException extends UnauthorizedException {
  constructor() {
    super('Car does not belong to the user');
  }
}

@Injectable()
export class CarUserPermissionGuard implements CanActivate {
  constructor(private prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();

    const carId = request.body.carId;

    const findCar = await this.prisma.car.findFirst({where: {id: carId}});

    if (!findCar) {
      throw new NotFoundException('Car not found');
    }

    const user: User = request.user as User;
    
    const userId = user.id;

    const car = await this.prisma.car.findFirst({
        where: {id: carId, userId: userId}
    });

    if (!car) {
      throw new CarUserPermissionException();
    }
    
    return true;
  }
}
