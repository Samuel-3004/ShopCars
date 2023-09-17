import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { UserContext } from "../UserProvider/UserContext";
import {
  ICar,
  ICarContext,
  IDefaultProviderProps,
  IImage,
  IImageRequest,
  IImageUpdate,
  TCarDataIdResponse,
  TCarRequest,
  TCarUpdate,
  TDataCarResponse,
} from "./@types";
import { AxiosResponse } from "axios";
import { ICarSeller } from "../UserProvider/@types";

export const CarContext = createContext({} as ICarContext);

export const CarProvider = ({ children }: IDefaultProviderProps) => {
  const [images, setImages] = useState<IImage[] | []>([]);
  const [car, setCar] = useState<ICar | null>(null);
  const [allcars, setAllCars] = useState<TCarDataIdResponse[] | []>([]);
  const [carDetailModal, setCarDetailModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState<ICarSeller | null>(null);
  const [allCarsRegistered, setAllCarsRegistered] = useState<
    TCarDataIdResponse[] | []
  >([]);

  const { setListCarsUser, listCarsUser, carUserSeller } =
    useContext(UserContext);

  useEffect(() => {
    const allCars = async () => {
      try {
        const response = await api.get<TCarDataIdResponse[]>(`/cars`);

        setAllCars(response.data);
        setAllCarsRegistered(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    allCars();
  }, []);

  const carRegister = async (
    formData: TCarRequest
  ): Promise<AxiosResponse<ICar>> => {
    const token = localStorage.getItem("@userToken");

    let response: AxiosResponse<ICar> | "" = "";

    if (token) {
      try {
        response = await api.post<ICar>("/cars", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setCar(response.data);
        carUserSeller();
        toast.success("Car registered!");
      } catch (error) {
        console.log(error);

        toast.error("Car already exists.");
      }
    }
    return response as AxiosResponse<ICar>;
  };

  const editeCar = async (formData: TCarUpdate, carId: string) => {
    const token = localStorage.getItem("@userToken");

    if (token) {
      try {
        const response = await api.patch<TDataCarResponse>(
          `/cars/${carId}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const newListCars = listCarsUser.map((car) => {
          if (car.id === carId) {
            return response.data;
          } else {
            return car;
          }
        });

        setListCarsUser(newListCars);
        carUserSeller();
        toast.success("Successfully changed!");
      } catch (error) {
        toast.error("Something went wrong!");
      }
    }
  };

  const deleteCar = async (carId: string) => {
    const token = localStorage.getItem("@userToken");

    if (token) {
      try {
        await api.delete(`/cars/${carId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        carUserSeller();
        toast.success("Successfully deleted!");
      } catch (error) {
        console.log(error);

        toast.error("Unable to delete car!");
      }
    }
  };

  const registerCarImage = async (payload: IImageRequest): Promise<void> => {
    const token = localStorage.getItem("@userToken");

    try {
      await api.post(`/images`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Registered image!");
    } catch (error) {
      console.log(error);

      toast.error("Error on register image");
    }
  };

  const updateCarImage = async (payload: IImageUpdate): Promise<void> => {
    const token: string | null = localStorage.getItem("@userToken");
    const carId: string | undefined = payload.id;
    delete payload.id;

    try {
      await api.patch(`/images/${carId}`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Updated image!");
    } catch (error) {
      console.log(error);
      toast.error("Error on update image");
    }
  };

  const deleteCarImage = async (carId: string) => {
    const token: string | null = localStorage.getItem("@userToken");

    try {
      await api.delete(`/images/${carId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Deleted image!");
    } catch (error) {
      console.log(error);
      toast.error("Error on delete image");
    }
  };

  // logiga de paginação de UserAds Gedson

  const [carsSellerSelect, setCarsSellerSelect] = useState<
    TDataCarResponse[] | []
  >([]);
  const [carsSellerSelectPerPage, setCarsSellerSelectPerPage] = useState<
    TDataCarResponse[] | []
  >([]);

  const [currentPageprofile, setCurrentPageProfile] = useState(1);
  const itemsPerPage = 12;

  const carSellerSelect = async () => {
    const userData: TDataCarResponse[] | null = JSON.parse(
      localStorage.getItem("@carsSellerSelect") || "null"
    );

    if (userData) {
      try {
        setCarsSellerSelect(userData);

        const startIndex = (currentPageprofile - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        setCarsSellerSelectPerPage(userData);

        const listPagination = userData.slice(startIndex, endIndex);

        setCarsSellerSelectPerPage(listPagination);
      } catch (error) {
        console.log(error);
        toast.error("Algo deu errado :(");
      }
    }
  };

  useEffect(() => {
    carSellerSelect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    carSellerSelect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPageprofile]);

  return (
    <CarContext.Provider
      value={{
        images,
        car,
        allcars,
        allCarsRegistered,
        setImages,
        setCar,
        setAllCars,
        setAllCarsRegistered,
        carRegister,
        editeCar,
        deleteCar,
        registerCarImage,
        carsSellerSelectPerPage,
        carsSellerSelect,
        setCurrentPageProfile,
        currentPageprofile,
        carSellerSelect,
        carDetailModal,
        setCarDetailModal,
        selectedCar,
        setSelectedCar,
        updateCarImage,
        deleteCarImage,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};
