import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { CarsRepository } from './repositories/cars.repository';
import { Car } from '@prisma/client';

@Injectable()
export class CarsService {
  constructor(private carsRepository: CarsRepository) {}

  async create(data: CreateCarDto, userId: string) {
    return await this.carsRepository.create(data, userId);
  }

  async findAll(page: number, perPage: number) {
    return await this.carsRepository.findAll(page, perPage);
  }

  async findAllCars() {
    return await this.carsRepository.findAllCars();
  }

  async findOne(id: string) {
    const car: Car | null = await this.carsRepository.findOne(id);

    if (!car) {
      throw new NotFoundException('Car not found');
    }

    return car;
  }

  async update(id: string, updateCarDto: UpdateCarDto) {
    const findCar: Car | null = await this.carsRepository.findOne(id);

    if (!findCar) {
      throw new NotFoundException('Car not found');
    }

    return this.carsRepository.update(id, updateCarDto);
  }

  async remove(id: string) {//Não tem uma chamada remove
    const findCar: Car | null = await this.carsRepository.findOne(id);

    if (!findCar) {
      throw new NotFoundException('Car not found');
    }

    return this.carsRepository.delete(id);
  }
}
