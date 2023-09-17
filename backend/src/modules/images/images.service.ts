import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { ImagesRepository } from './repositories/images.repository';
import { Image } from '@prisma/client';

@Injectable()
export class ImagesService {
  constructor(private imagesRepository: ImagesRepository) {}

  async create(data: CreateImageDto) {
    return await this.imagesRepository.create(data);
  }

  async findAll() {
    return await this.imagesRepository.findAll();
  }

  async findOne(id: string) {
    const image: Image | null = await this.imagesRepository.findOne(id);

    if (!image) {
      throw new NotFoundException('Image not found');
    }
    return image;
  }

  async update(id: string, updateImageDto: UpdateImageDto) {
    const findImage: Image | null = await this.imagesRepository.findOne(id);

    if (!findImage) {
      throw new NotFoundException('Image not found');
    }

    return this.imagesRepository.update(id, updateImageDto);
  }

  async remove(id: string) {
    const findImage: Image | null = await this.imagesRepository.findOne(id);

    if (!findImage) {
      throw new NotFoundException('Image not found');
    }

    return this.imagesRepository.delete(id);
  }
}
