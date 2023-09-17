import { ApiProperty } from '@nestjs/swagger';

export class ConflictSwagger {
  @ApiProperty({ default: 409 })
  statusCode: number;

  @ApiProperty()
  message: string;

  @ApiProperty({ default: 'Conflict' })
  error: string;
}
