import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CarsRepository } from '../cars.repository';
import { CreateCarDto } from '../../dto/create-car.dto';
import { Car } from '../../entities/car.entity';
import { UpdateCarDto } from '../../dto/update-car.dto';
import { TPaginationCars } from '../../interface/car.interfaces';

@Injectable()
export class CarsPrismaRepository implements CarsRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCarDto, userId: string): Promise<Car> {
    const car: Car = new Car();

    Object.assign(car, {
      ...data,
      userId: userId,
    });

    const newCar: Car = await this.prisma.car.create({
      data: {
        id: car.id,

        brand: car.brand,
        model: car.model,
        year: car.year,
        km: car.km,
        color: car.color,
        status: car.status,
        fuel: car.fuel,
        price: car.price,
        description: car.description,
        imgCover: car.imgCover,
        bestPrice: car.bestPrice,

        userId: car.userId,
      },
    });

    return newCar;
  }

  async findAll(page: number, perPage: number): Promise<TPaginationCars> {
    const skip = (page - 1) * perPage;
    const take = perPage;

    const cars: Car[] | [] = await this.prisma.car.findMany({
      skip,
      take,
      include: {
        images: true,
        comments: true,
        user: true,
      },
    });

    const totalCars = await this.prisma.car.count();
    const totalPages = Math.ceil(totalCars / perPage);
    const nextPage = Number(page) < totalPages && Number(page) + 1;
    const prevPage =
      Number(page) > 1 && Number(page) <= totalPages + 1 && Number(page) - 1;
    const nextPageUrl = nextPage
      ? `http://localhost:3000/cars/?page=${nextPage}`
      : null;
    const prevPageUrl = prevPage
      ? `http://localhost:3000/cars/?page=${prevPage}`
      : null;

    const returnCarsPagination: TPaginationCars = {
      nextPage: nextPageUrl,
      prevPage: prevPageUrl,
      totalPages: totalPages,
      totalCars: totalCars,
      cars,
    };

    return returnCarsPagination;
  }

  async findAllCars(): Promise<Car[]| []> {
    const cars: Car[] | [] = await this.prisma.car.findMany({
      include: {
        images: true,
        comments: {
          include: {
            user: true,
          },
        },
        user: true,
      },
    });
    return cars;
  }

  async findOne(id: string): Promise<Car> {
    const car: Car = await this.prisma.car.findFirst({
      where: { id },
      include: {
        images: true,
        comments: {
          include: {
            user: true,
          },
        },
        user: true,
      },
    });
    return car;
  }

  async update(id: string, data: UpdateCarDto): Promise<Car> {
    const car: Car = await this.prisma.car.update({
      where: { id },
      include: {
        images: true,
        comments: true,
        user: true,
      },
      data: { ...data },
    });
    return car;
  }

  async delete(id: string): Promise<void> {
    await this.prisma.car.delete({
      where: { id },
    });
  }
}
