import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { CarContext } from "../CarProvider/CarContext";
import { api } from "../../services/api";
import { ICar, TCarDataIdResponse } from "../CarProvider/@types";

interface IHomeProviderProps {
  children: ReactNode;
}

interface HomeContextValues {
  selectedbrand: string;
  setSelectedbrand: React.Dispatch<React.SetStateAction<string>>;
  selectedModel: string;
  setSelectedModel: React.Dispatch<React.SetStateAction<string>>;
  selectedColor: string;
  setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
  selectedYear: string;
  setSelectedYear: React.Dispatch<React.SetStateAction<string>>;
  selectedFuelType: string;
  setSelectedFuelType: React.Dispatch<React.SetStateAction<string>>;
  valueCar: number[];
  setValueCar: React.Dispatch<React.SetStateAction<number[]>>;
  valueKmCar: number[];
  setValueKmCar: React.Dispatch<React.SetStateAction<number[]>>;
  modalFilter: boolean;
  setModalFilter: React.Dispatch<React.SetStateAction<boolean>>;
  clearFilters: () => void;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  allcarsPages: [] | ICar[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  seller: boolean;
  isAdm: boolean;
  cellPhone: string;
  cpf: string;
  dateOfBirth: string;
  description: string;
  city: string;
  state: string;
  street: string;
  number: number;
  complement: string;
}

export const HomeContext = createContext({} as HomeContextValues);

export const HomeProvider = ({ children }: IHomeProviderProps) => {
  const [selectedbrand, setSelectedbrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedFuelType, setSelectedFuelType] = useState("");
  const [valueCar, setValueCar] = useState<number[]>([0, 550000]);
  const [valueKmCar, setValueKmCar] = useState<number[]>([0, 650000]);
  const [modalFilter, setModalFilter] = useState(false);

  const { setAllCars } = useContext(CarContext);

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 12;

  const [allcarsPages, setAllCarsPages] = useState<[] | TCarDataIdResponse[]>(
    []
  );

  const filterCars = async () => {
    try {
      const response = await api.get<[] | TCarDataIdResponse[]>("/cars");

      setAllCarsPages(response.data);

      let filteredCars = response.data;

      if (selectedbrand !== "") {
        filteredCars = filteredCars.filter(
          (car) => car.brand.toLowerCase() === selectedbrand.toLowerCase()
        );
      }

      if (selectedModel !== "") {
        filteredCars = filteredCars.filter((car) => {
          const firstWordOfModel = car.model.split(" ")[0].toLowerCase();
          return firstWordOfModel === selectedModel.toLowerCase();
        });
      }

      if (selectedColor !== "") {
        filteredCars = filteredCars.filter(
          (car) => car.color.toLowerCase() === selectedColor.toLowerCase()
        );
      }

      if (selectedYear !== "") {
        filteredCars = filteredCars.filter(
          (car) => car.year.toLowerCase() === selectedYear.toLowerCase()
        );
      }

      if (selectedFuelType !== "") {
        filteredCars = filteredCars.filter(
          (car) => car.fuel.toLowerCase() === selectedFuelType.toLowerCase()
        );
      }

      if (valueKmCar[0] > 0 || valueKmCar[1] < 650000) {
        filteredCars = filteredCars.filter(
          (car) => car.km >= valueKmCar[0] && car.km <= valueKmCar[1]
        );
      }

      if (valueCar[0] > 0 || valueCar[1] < 550000) {
        filteredCars = filteredCars.filter(
          (car) => car.price >= valueCar[0] && car.price <= valueCar[1]
        );
      }

      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;

      setAllCarsPages(filteredCars);

      const listPagination: [] | TCarDataIdResponse[] = filteredCars.slice(
        startIndex,
        endIndex
      );
      setAllCars(listPagination);
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  };

  let totalPages = 1;
  if (allcarsPages.length < 12) {
    const totalItems = allcarsPages.length + 1;
    totalPages = Math.ceil(totalItems / itemsPerPage);
  } else {
    const totalItems = allcarsPages.length;
    totalPages = Math.ceil(totalItems / itemsPerPage);
  }

  useEffect(() => {
    setCurrentPage(1);
  }, [totalPages]);

  useEffect(() => {
    filterCars();
  }, [
    selectedbrand,
    selectedModel,
    selectedColor,
    selectedYear,
    selectedFuelType,
    valueKmCar,
    valueCar,
    currentPage,
  ]);

  useEffect(() => {
    filterCars();
    setValueKmCar([0, 640000]);
    setValueKmCar([0, 650000]);
  }, []);

  const clearFilters = () => {
    setSelectedbrand("");
    setSelectedModel("");
    setSelectedColor("");
    setSelectedYear("");
    setSelectedFuelType("");
    setValueCar([0, 550000]);
    setValueKmCar([0, 650000]);

    filterCars();
  };

  return (
    <HomeContext.Provider
      value={{
        selectedbrand,
        setSelectedbrand,
        selectedModel,
        setSelectedModel,
        selectedColor,
        setSelectedColor,
        selectedYear,
        setSelectedYear,
        selectedFuelType,
        setSelectedFuelType,
        valueCar,
        setValueCar,
        valueKmCar,
        setValueKmCar,
        modalFilter,
        setModalFilter,
        clearFilters,
        currentPage,
        setCurrentPage,
        allcarsPages,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
