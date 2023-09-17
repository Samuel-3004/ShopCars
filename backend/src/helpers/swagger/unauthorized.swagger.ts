import { ApiProperty } from '@nestjs/swagger';

export class UnauthorizedSwagger {
  @ApiProperty({ default: 401 })
  statusCode: number;

  @ApiProperty()
  message: string;

  @ApiProperty({ default: 'Unauthorized' })
  error: string;
}
