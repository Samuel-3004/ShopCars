import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ImagesRepository } from 'src/modules/images/repositories/images.repository';
import { CreateImageDto } from '../../dto/create-image.dto';
import { Image } from 'src/modules/images/entities/image.entity';
import { UpdateImageDto } from '../../dto/update-image.dto';
import { Car } from '@prisma/client';

@Injectable()
export class ImagesPrismaRepository implements ImagesRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateImageDto): Promise<Image> {
    const image: Image = new Image();

    const car: Car | null = await this.prisma.car.findFirst({
      where: { id: data.carId },
    });

    if (!car) {
      throw new NotFoundException('Car not found');
    }

    Object.assign(image, {
      ...data,
    });

    const newImage: Image = await this.prisma.image.create({
      data: {
        id: image.id,
        imgGalery: image.imgGalery,
        carId: image.carId,
      },
    });

    return newImage;
  }

  async findAll(): Promise<Image[]> {
    const images: Image[] | [] = await this.prisma.image.findMany();
    return images;
  }

  async findOne(id: string): Promise<Image> {
    const image: Image = await this.prisma.image.findFirst({
      where: { id },
    });

    return image;
  }

  async update(id: string, data: UpdateImageDto): Promise<Image> {
    const image: Image = await this.prisma.image.update({
      where: { id },
      data: { ...data },
    });
    return image;
  }

  async delete(id: string): Promise<void> {
    await this.prisma.image.delete({
      where: { id },
    });
  }
}
