import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { randomUUID } from 'crypto';

export class User {
  @ApiProperty()
  readonly id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  readonly seller: boolean;

  @ApiProperty()
  cellPhone: string;

  @ApiProperty()
  cpf: string;

  @ApiProperty()
  dateOfBirth: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  state: string;

  @ApiProperty()
  street: string | null;

  @ApiProperty()
  number: number | null;

  @ApiProperty()
  complement: string | null;

  @ApiProperty()
  cep: string | null;

  @ApiProperty()
  @Exclude()
  password: string;

  @ApiProperty()
  @Exclude()
  isAdm: boolean;

  @ApiPropertyOptional()
  reset_token: string | null;

  constructor() {
    this.id = randomUUID();
  }
}


export class UserProfile {
  @ApiProperty()
  readonly id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  readonly seller: boolean;

  @ApiProperty()
  cellPhone: string;

  @ApiProperty()
  @Exclude()
  cpf: string;
  
  @ApiProperty()
  dateOfBirth: string;

  @ApiProperty()
  @Exclude()
  description: string;

  @ApiProperty()
  @Exclude()
  city: string;

  @ApiProperty()
  @Exclude()
  state: string;

  @ApiProperty()
  @Exclude()
  street: string | null;

  @ApiProperty()
  @Exclude()
  number: number | null;

  @ApiProperty()
  @Exclude()
  complement: string | null;

  @ApiProperty()
  @Exclude()
  cep: string;

  @ApiProperty()
  @Exclude()
  password: string;

  @ApiProperty()
  @Exclude()
  isAdm: boolean;

  @ApiPropertyOptional()
  reset_token: string | null;

  constructor() {
    this.id = randomUUID();
  }
}
