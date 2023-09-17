import { AxiosResponse } from "axios";
import { ICarSeller, IUser } from "../UserProvider/@types";
import { TCommentUserResponse } from "../CommentProvider/@types";
export interface ICarContext {
  images: IImage[] | [];
  car: ICar | null;
  allcars: [] | TCarDataIdResponse[];
  setImages: React.Dispatch<React.SetStateAction<IImage[] | []>>;
  setCar: React.Dispatch<React.SetStateAction<ICar | null>>;

  setAllCarsRegistered: React.Dispatch<
    React.SetStateAction<[] | TCarDataIdResponse[]>
  >;

  setAllCars: React.Dispatch<React.SetStateAction<[] | TCarDataIdResponse[]>>;
  carRegister: (formData: TCarRequest) => Promise<AxiosResponse<ICar>>;
  editeCar: (formData: TCarUpdate, carId: string) => Promise<void>;
  deleteCar: (carId: string) => Promise<void>;
  registerCarImage: (payload: IImageRequest) => Promise<void>;
  carsSellerSelectPerPage: TDataCarResponse[] | [] | null;
  carsSellerSelect: [] | TDataCarResponse[] | null;
  setCurrentPageProfile: React.Dispatch<React.SetStateAction<number>>;
  currentPageprofile: number;
  carSellerSelect: () => Promise<void>;
  allCarsRegistered: [] | TCarDataIdResponse[];
  carDetailModal: boolean;
  setCarDetailModal: React.Dispatch<React.SetStateAction<boolean>>;
  selectedCar: ICarSeller | null;
  setSelectedCar: React.Dispatch<React.SetStateAction<ICarSeller | null>>;
  updateCarImage: (payload: IImageUpdate) => Promise<void>;
  deleteCarImage: (carId: string) => Promise<void>;
}
export interface IDefaultProviderProps {
  children: React.ReactNode;
}
export interface ICar {
  id: string;
  brand: string;
  model: string;
  year: string;
  km: number;
  color: string;
  status?: boolean;
  fuel: string;
  price: number;
  description: string;
  imgCover: string;
  bestPrice: boolean;
  userId: number;
}
export type TCarRequest = Omit<ICar, "id" | "userId">;
export interface TUserCarsResponse extends IUser {
  cars: ICar[] | [];
}
export interface IImage {
  id: string;
  imgGalery: string;
  carId: string;
}
export type IImageRequest = Omit<IImage, "id">;
export type IImageUpdate = Partial<Omit<IImage, "carId">>;
export interface IComment {
  id: string;
  description: string;
  createdAt: string;
  createdAtString: string;
  carId: string;
  userId: string;
}
export type TCarUpdate = Partial<TCarRequest>;
export interface TDataCarResponse extends ICar {
  images: IImage[] | [];
  comments: IComment[] | [];
  user: IUser;
}
export interface TListPaginationCars {
  nextPage: number | null;
  prevPage: number | null;
  totalPages: number | null;
  totalCars: number | null;
  cars: TDataCarResponse[] | [];
}
export interface TCarUserResponse extends ICar {
  user: IUser;
}

export interface TCarDataIdResponse extends ICar {
  images: IImage[] | [];
  comments: TCommentUserResponse[] | [];
  user: IUser;
}
