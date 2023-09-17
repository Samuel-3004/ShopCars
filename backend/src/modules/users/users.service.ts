import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/users.repository';
import { MailService } from '../utils/mail.service';
import { randomUUID } from 'crypto';
import {
  InformEmailDto,
  InformNewPasswordDto,
  TokenDto,
} from './dto/send-email.dto';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(
    private usersRepository: UsersRepository,
    private mailService: MailService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const findUser: User | null = await this.usersRepository.findByEmail(
      createUserDto.email,
    );

    if (findUser) {
      throw new ConflictException('Email already exists');
    }

    const user: User = await this.usersRepository.create(createUserDto);

    return user;
  }

  async findAll() {
    return this.usersRepository.findAll();
  }

  async findAllProfile() {
    return this.usersRepository.findAllProfile();
  }

  async findOne(id: string) {
    const findUser: User | null = await this.usersRepository.findOne(id);

    if (!findUser) {
      throw new NotFoundException('User not found');
    }

    return findUser;
  }

  async findByEmail(email: string) {
    const findUser: User = await this.usersRepository.findByEmail(email);

    return findUser;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const findUser: User | null = await this.usersRepository.findOne(id);

    if (!findUser) {
      throw new NotFoundException('User not found!');
    }

    return this.usersRepository.update(id, updateUserDto);
  }

  async remove(id: string) {
    const findUser = await this.usersRepository.findOne(id);

    if (!findUser) {
      throw new NotFoundException('User not found!');
    }

    return this.usersRepository.delete(id);
  }

  async sendEmailResetPassword(informEmailDto: InformEmailDto) {
    const user: User | null = await this.usersRepository.findByEmail(
      informEmailDto.email,
    );

    if (!user) {
      throw new NotFoundException('User Not found');
    }

    const resetToken: string = randomUUID();

    await this.usersRepository.updateToken(informEmailDto.email, resetToken);

    const resetPasswordTemplate = await this.mailService.resetPasswordTemplate(
      informEmailDto.email,
      user.name,
      resetToken,
    );

    await this.mailService.sendEmail(resetPasswordTemplate);
  }

  async resetPassword(
    informNewPasswordDto: InformNewPasswordDto,
    tokenDto: TokenDto,
  ) {
    const user: User | null = await this.usersRepository.findByToken(
      tokenDto.token,
    );

    if (!user) {
      throw new NotFoundException('User Not found');
    }

    await this.usersRepository.updatePassword(
      user.id,
      informNewPasswordDto.password,
    );
  }
}
