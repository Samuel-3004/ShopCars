import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'node:crypto';

export class Car {
  @ApiProperty()
  readonly id: string;

  @ApiProperty()
  brand: string;

  @ApiProperty()
  model: string;

  @ApiProperty()
  year: string;

  @ApiProperty()
  km: number;

  @ApiProperty()
  color: string;

  @ApiProperty()
  status: boolean;

  @ApiProperty()
  fuel: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  description: string;

  @ApiProperty()
  imgCover: string;

  @ApiProperty()
  bestPrice: boolean;
  
  @ApiProperty()
  userId: string;

  constructor() {
    this.id = randomUUID();
  }
}


export class CarsPagination {

  @ApiProperty()
  nextPage: string;

  @ApiProperty()
  prevPage: string;

  @ApiProperty()
  totalPages: number;

  @ApiProperty()
  totalCars: number;
}
