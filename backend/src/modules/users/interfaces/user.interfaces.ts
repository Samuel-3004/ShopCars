import { Car, User } from '@prisma/client';

export interface IUserCars extends User {
  cars: Car[] | [];
}

export interface IUserCarsProfile {
  id: string;
  name: string;
  email: string;
  seller: boolean;
  cellPhone: string;
  dateOfBirth: string;
  reset_token: boolean | null;
  cars: Car[] | [];
}
