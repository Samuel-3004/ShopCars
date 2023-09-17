import { ApiProperty, OmitType } from '@nestjs/swagger';
import { User, UserProfile } from '../entities/user.entity';
import { CarSwagger } from 'src/modules/cars/swagger/cars.swagger';

export class UserSwagger extends OmitType(User, ['isAdm', 'password']) {}

export class ProfileSwagger extends OmitType(UserProfile, [
  'isAdm',
  'password',
  'description',
  'city',
  'state',
  'street',
  'number',
  'complement',
  'cep',
  'cpf',
]) {}

export class UserProfileSwagger extends ProfileSwagger {
  @ApiProperty({ type: CarSwagger, isArray: true })
  cars: CarSwagger[];
}

export class UserIdSwagger extends UserSwagger {
    @ApiProperty({ type: CarSwagger, isArray: true })
    cars: CarSwagger[];
  }