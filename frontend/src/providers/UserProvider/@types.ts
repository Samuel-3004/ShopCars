import { ResetPasswordData } from "../../components/ModalResetPassword/@types";
import { ResetEmailData } from "../../components/ModalSendEmail/@types";
import { ICreateUser } from "../../components/RegisterForm/@types";
import {
  ICar,
  TDataCarResponse,
  TUserCarsResponse,
} from "../CarProvider/@types";

export interface IUserContext {
  user: IUser | null;
  loading: boolean;
  listCarsUser: [] | ICar[];
  userIdCars: TUserCarsResponse | null;
  darkMode: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setListCarsUser: React.Dispatch<React.SetStateAction<[] | ICar[]>>;
  setUserIdCars: React.Dispatch<React.SetStateAction<TUserCarsResponse | null>>;
  modalForgottenOpen: boolean;
  setModalForgottenOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
  userLogin: (formData: ILogin) => Promise<void>;
  userRegister: (formData: ICreateUser) => Promise<void>;
  logout: () => void;
  addressEditModal: boolean;
  setAddressEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  sendEmail: (sendEmailData: ResetEmailData) => void;
  resetPassword: (resetPasswordData: ResetPasswordData, token: string) => void;
  updateUser: (formData: Partial<IUser>) => Promise<void>;
  profileEditModal: boolean;
  setProfileEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  deleteUser: () => Promise<void>;
  allcarsUserPerPage2: [] | ICarSeller[];
  currentPageprofile: number;
  setCurrentPageProfile: React.Dispatch<React.SetStateAction<number>>;
  allcarsUser2: [] | ICarSeller[];
  allCarsCommonProfilePerPage: [] | TDataCarResponse[];
  currentPageprofileComum: number;
  setCurrentPageProfileComum: React.Dispatch<React.SetStateAction<number>>;
  allcarsComumProfile: [] | TDataCarResponse[];
  allcarsUser: [] | TDataCarResponse[];
  setAllcarsUser: React.Dispatch<React.SetStateAction<[] | TDataCarResponse[]>>;
  allcarsUserPerPage: [] | TDataCarResponse[];
  setAllcarsUserPerPage: React.Dispatch<
    React.SetStateAction<[] | TDataCarResponse[]>
  >;
  setAllcarsUserPerPage2: (
    value: React.SetStateAction<[] | ICarSeller[]>
  ) => void;
  carUserSeller: () => Promise<void>;
  userSelected: TDataCarResponse[] | null;
  setUserSelected: React.Dispatch<
    React.SetStateAction<TDataCarResponse[] | null>
  >;
  carUser: () => void;
}

export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  seller: boolean;
  cellPhone: string;
  cpf: string;
  dateOfBirth: string;
  description: string;
  city: string;
  state: string;
  street: string;
  number: number;
  complement: string;
  cep: string;
  isAdmin: boolean;
}

export interface IRegister extends Omit<IUser, "id"> {}

export interface ILogin {
  email: string;
  password: string;
}

export interface ICarSeller {
  id: string;
  brand: string;
  model: string;
  year: string;
  km: number;
  color: string;
  status: boolean;
  fuel: string;
  price: number;
  description: string;
  imgCover: string;
  bestPrice: boolean;
  userId: string;
}

export interface IUserSeller {
  id: string;
  name: string;
  email: string;
  seller: boolean;
  cellPhone: string;
  dateOfBirth: string;
  reset_token: string | null;
  cars: ICarSeller[];
}
