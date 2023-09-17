import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCommentDto {
  @ApiProperty({
    default: 'O veículo tem diversas características que...',
  })
  @IsString()
  description: string;

  @ApiProperty()
  @IsString()
  carId: string;
}
