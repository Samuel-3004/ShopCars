import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';

export abstract class UsersRepository {
  abstract create(data: CreateUserDto): Promise<User>;
  abstract findAll(): Promise<User[]>;
  abstract findAllProfile(): Promise<User[] | []>;
  abstract findOne(id: string): Promise<User>;
  abstract findByEmail(email: string): Promise<User>;
  abstract findByToken(token: string): Promise<User>;
  abstract update(id: string, data: UpdateUserDto): Promise<User>;
  abstract updateToken(email: string, token: string): Promise<void>;
  abstract updatePassword(id: string, password: string): Promise<void>;
  abstract delete(id: string): Promise<void>;
}
