import { CreateCarDto } from '../dto/create-car.dto';
import { UpdateCarDto } from '../dto/update-car.dto';
import { Car } from '../entities/car.entity';
import { TPaginationCars } from '../interface/car.interfaces';

export abstract class CarsRepository {
  abstract create(data: CreateCarDto, userId: string): Promise<Car>;
  abstract findAll(page: number, perPage: number): Promise<TPaginationCars>;
  abstract findAllCars(): Promise<Car[]>;
  abstract findOne(id: string): Promise<Car>;
  abstract update(id: string, data: UpdateCarDto): Promise<Car>;
  abstract delete(id: string): Promise<void>;
}
