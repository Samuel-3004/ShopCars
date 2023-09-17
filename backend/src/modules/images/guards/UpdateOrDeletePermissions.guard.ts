import { Injectable, CanActivate, ExecutionContext, NotFoundException} from '@nestjs/common';
import { Request } from 'express';
import { UnauthorizedException } from '@nestjs/common';
import { User } from 'src/modules/users/entities/user.entity';
import { PrismaService } from 'src/database/prisma.service';



@Injectable()
export class ImagePermissionGuard implements CanActivate {
  constructor(private prisma: PrismaService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();

    const imageId = request.params.id;

    const user: User = request.user as User;
    
    const userId = user.id;

        const image = await this.prisma.image.findFirst({
          where: { id: imageId}
        })

        if(!image) {
          throw new NotFoundException("Image not found")
        }

        const car = await this.prisma.car.findFirst({
          where: {
            id: image.carId
          }
        })

        if(car.userId != userId) {
          throw new UnauthorizedException("You do not have permission to perform this task");
        }

        return true;
  }
}
