import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail } from 'class-validator';

export class SendEmailDto {
  @IsString()
  to: string;

  @ApiProperty()
  @IsEmail()
  subject: string;

  @IsString()
  text: string;
}

export class InformEmailDto {
  @ApiProperty({ default: 'fulanodetal@mail.com' })
  @IsEmail()
  email: string;
}

export class InformNewPasswordDto {
  @ApiProperty({ default: 'new password' })
  @IsString()
  password: string;
}

export class TokenDto {
  @ApiProperty()
  @IsString()
  token: string;
}
