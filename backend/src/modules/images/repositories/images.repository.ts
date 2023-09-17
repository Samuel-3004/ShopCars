import {Image} from "@prisma/client"
import { CreateImageDto } from '../dto/create-image.dto';
import { UpdateImageDto } from '../dto/update-image.dto';

export abstract class ImagesRepository {
  abstract create(data: CreateImageDto): Promise<Image>;
  abstract findAll(): Promise<Image[] | []>;
  abstract findOne(id: string): Promise<Image>;
  abstract update(id: string, data: UpdateImageDto): Promise<Image>;
  abstract delete(id: string): Promise<void>;
}
