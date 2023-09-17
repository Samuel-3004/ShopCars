import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateImageDto {
  @ApiProperty({
    default:
      'https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/02-images/cruze-sport6-rs-carros.jpg?imwidth=960',
  })
  @IsString()
  imgGalery: string;

  @ApiProperty()
  @IsString()
  carId: string;
}
