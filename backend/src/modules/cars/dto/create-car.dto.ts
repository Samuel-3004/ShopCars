import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';

export class CreateCarDto {
  @ApiProperty({ default: 'Zonda' })
  @IsString()
  brand: string;

  @ApiProperty({ default: 'Pagani Zonda HP Barchetta' })
  @IsString()
  model: string;

  @ApiProperty({ default: '2022' })
  @IsString()
  year: string;

  @ApiProperty({ default: 0 })
  @IsInt()
  km: number;

  @ApiProperty({ default: 'azul' })
  @IsString()
  color: string;

  @ApiProperty({ default: 'elétrico' })
  @IsString()
  fuel: string;

  @ApiProperty({ default: 140000 })
  @IsInt()
  price: number;

  @ApiProperty({
    default:
      'O Pagani Zonda HP Barchetta é um superesportivo que teve apenas três unidades produzidas.',
  })
  @IsString()
  description: string;

  @ApiProperty({
    default:
      'https://www.otempo.com.br/image/policy:1.2890015:1686947541/pagani_zonda_hp_barchetta_745.jpeg?f=3x2&w=400&q=0.3',
  })
  @IsString()
  @IsOptional()
  imgCover: string | null = 'https://img.freepik.com/vetores-gratis/carro-moderno-luzes-composicao_1284-21373.jpg?w=826&t=st=1693414340~exp=1693414940~hmac=0280ef4736b2354e8eb27ed349cd6b4de3b602c4a03686765e68fea99f6b0afe';

  @ApiProperty()
  @IsBoolean()
  bestPrice: boolean

  @ApiProperty({
    default: true
  })
  @IsBoolean()
  @IsOptional()
  status: boolean | null = true

}
