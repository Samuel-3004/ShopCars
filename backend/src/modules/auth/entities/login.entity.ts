import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';

export class Login {
  @ApiProperty()
  token: string;

  @ApiProperty()
  readonly id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  isAdm: boolean;

  @ApiProperty()
  seller: boolean;

  constructor() {
    this.id = randomUUID();
  }
}
