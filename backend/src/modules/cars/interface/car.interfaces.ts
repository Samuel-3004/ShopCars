import { Car } from '@prisma/client';

export interface IId {
  id: string;
}

export type TPaginationCars = {
    nextPage: string;
    prevPage: string;
    totalPages: number;
    totalCars: number;
    cars: Car[];
  };
