import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsString,
  IsEmail,
  MinLength,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsBoolean,
} from 'class-validator';
import { hashSync } from 'bcryptjs';

export class CreateUserDto {
  @ApiProperty({ default: 'Fulano de Tal' })
  @IsString()
  name: string;

  @ApiProperty({ default: 'fulanodetal@mail.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ default: '12345678' })
  @IsString()
  @MinLength(8)
  @IsNotEmpty()
  @Transform(({ value }: { value: string }) => hashSync(value, 10), {
    groups: ['transform'],
  })
  password: string;

  @ApiPropertyOptional({ default: false })
  @IsOptional()
  @IsBoolean()
  seller: boolean;

  @ApiPropertyOptional({ default: false })
  @IsOptional()
  @IsBoolean()
  isAdm: boolean;

  @ApiProperty({ default: '(11) 92345-6789' })
  @IsString()
  cellPhone: string;

  @ApiProperty({ default: '012.345.678-90' })
  @IsString()
  cpf: string;

  @ApiProperty({ default: '1985/10/30' })
  @IsString()
  dateOfBirth: string;

  @ApiProperty({ default: 'Vendedora de ...' })
  @IsString()
  description: string;

  @ApiProperty({ default: 'Florianópolis' })
  @IsString()
  city: string;

  @ApiProperty({ default: 'SC' })
  @IsString()
  state: string;

  @ApiPropertyOptional({ default: 'São Bento' })
  @IsString()
  @IsOptional()
  street: string | null;

  @ApiPropertyOptional({ default: 15 })
  @IsInt()
  @IsOptional()
  number: number | null;

  @ApiPropertyOptional({ default: 'Casa tal' })
  @IsString()
  @IsOptional()
  complement: string | null;

  @ApiPropertyOptional({ default: '99.999-999' })
  @IsString()
  @IsOptional()
  cep: string | null;

  @ApiPropertyOptional({ default: null })
  @IsString()
  @IsOptional()
  reset_token: string | null;

}
