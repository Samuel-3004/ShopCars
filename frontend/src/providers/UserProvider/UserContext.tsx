import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ICarSeller,
  IDefaultProviderProps,
  ILogin,
  IUser,
  IUserContext,
  IUserSeller,
} from "./@types";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { ICreateUser } from "../../components/RegisterForm/@types";
import {
  ICar,
  TDataCarResponse,
  TUserCarsResponse,
} from "../CarProvider/@types";
import { ResetEmailData } from "../../components/ModalSendEmail/@types";
import { ResetPasswordData } from "../../components/ModalResetPassword/@types";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [listCarsUser, setListCarsUser] = useState<ICar[] | []>([]);
  const [userIdCars, setUserIdCars] = useState<TUserCarsResponse | null>(null);
  const [modalForgottenOpen, setModalForgottenOpen] = useState<boolean>(false);
  const [profileEditModal, setProfileEditModal] = useState(false);
  const [addressEditModal, setAddressEditModal] = useState(false);
  const [allcarsUser, setAllcarsUser] = useState<TDataCarResponse[] | []>([]);
  const [allcarsUserPerPage, setAllcarsUserPerPage] = useState<
    TDataCarResponse[] | []
  >([]);
  const [allcarsUser2, setAllcarsUser2] = useState<ICarSeller[] | []>([]);
  const [allcarsUserPerPage2, setAllcarsUserPerPage2] = useState<
    ICarSeller[] | []
  >([]);
  const [currentPageprofile, setCurrentPageProfile] = useState(1);
  const [currentPageprofileComum, setCurrentPageProfileComum] = useState(1);
  const [allcarsComumProfile, setModelInfoSetAllCarsCommonProfile] = useState<
    TDataCarResponse[] | []
  >([]);
  const [allCarsCommonProfilePerPage, setAllCarsCommonProfilePerPage] =
    useState<TDataCarResponse[] | []>([]);
  const [userSelected, setUserSelected] = useState<TDataCarResponse[] | null>(
    null
  );
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const userLogin = async (formData: ILogin) => {
    try {
      setLoading(true);
      const res = await api.post("/login", formData);

      setUser(res.data);

      localStorage.setItem("@userToken", res.data.token);
      localStorage.setItem("@userId", res.data.id);

      setCurrentPageProfile(1);
      setCurrentPageProfileComum(1);
      carUserSeller();
      toast.success("Logged in!");

      if (!res.data.seller) {
        navigate("/userPage");
      } else {
        navigate("/profile");
      }
    } catch (error) {
      console.log(error);

      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("@userToken");
    const userId = localStorage.getItem("@userId");

    let darkModeLocal: boolean | null = JSON.parse(
      localStorage.getItem("@darkMode") || "null"
    );

    darkModeLocal !== true ? darkModeLocal = false : darkModeLocal = true

    setDarkMode(darkModeLocal)

    localStorage.setItem("@darkMode", JSON.stringify(darkModeLocal));

    if (token) {
      const userLogged = async () => {
        try {
          setLoading(true);
          const response = await api.get<TUserCarsResponse>(
            `/users/${userId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setUserIdCars(response.data);

          if (!response.data.seller) {
            navigate("/userPage");
          } else {
            navigate("/profile");
          }
        } catch (error) {
          console.log(error);

          localStorage.clear();

          navigate("/");
        } finally {
          setLoading(false);
        }
      };
      userLogged();
    }
  }, [user, currentPageprofile]);

  const userRegister = async (formData: ICreateUser) => {
    try {
      setLoading(true);
      const res = await api.post("/users", formData);

      setUser(res.data);

      toast.success("User registered!");

      navigate("/login");
    } catch (error) {
      console.log(error);

      toast.error("Email already exists.");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);

    localStorage.removeItem("@userToken");
    localStorage.removeItem("@userId");
    setCurrentPageProfile(2);
    setCurrentPageProfileComum(2);
    setUserIdCars(null);
    navigate("/login");
  };

  const sendEmail = async (sendEmailData: ResetEmailData) => {
    try {
      await api.post("/users/resetPassword", sendEmailData);

      toast.success("Email successfully sent");
    } catch (error) {
      console.log(error);

      toast.error("Error send email");
    }
  };

  const resetPassword = async (
    resetPasswordData: ResetPasswordData,
    token: string
  ) => {
    const passres = { password: resetPasswordData.password };

    try {
      await api.patch(`/users/resetPassword/${token}`, passres);

      toast.success("Password changed successfully");

      navigate("/login");
    } catch (error) {
      console.log(error);

      toast.error("Password reset error, please try again");
    }
  };

  const updateUser = async (formData: Partial<IUser>) => {
    const token = localStorage.getItem("@userToken");
    const id = localStorage.getItem("@userId");

    if (token) {
      try {
        setLoading(true);
        const res = await api.patch(`/users/${id}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUserIdCars((previousUser) => ({
          ...previousUser,
          ...res.data,
        }));

        toast.success("Usuário atualizado");
      } catch (error) {
        console.log(error);
        toast.error("Falha ao atualizar usuário");
      } finally {
        setLoading(false);
      }
    }
  };

  const deleteUser = async () => {
    const token = localStorage.getItem("@userToken");
    const id = localStorage.getItem("@userId");

    try {
      setLoading(true);
      await api.delete(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(null);
      setUserIdCars(null);
      localStorage.clear();

      toast.success("Conta deletada");

      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado :(");
    } finally {
      setLoading(false);
    }
  };

  const itemsPerPage = 12;

  const carUserSeller = async () => {
    const token = localStorage.getItem("@userToken");
    const id = localStorage.getItem("@userId");

    if (token) {
      try {
        setLoading(true);
        const response = await api.get<IUserSeller[]>(`/users/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const carsUser2 = response.data.filter((user) => user.id == id);

        const carsUser = carsUser2[0].cars;

        const startIndex = (currentPageprofile - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        setAllcarsUser2(carsUser);

        const listPagination = carsUser.slice(startIndex, endIndex);

        setAllcarsUserPerPage2(listPagination);
      } catch (error) {
        console.log(error);
        toast.error("Algo deu errado :(");
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    carUserSeller();
  }, []);

  useEffect(() => {
    carUserSeller();
  }, [currentPageprofile]);

  const carUser = async () => {
    try {
      setLoading(true);
      const response = await api.get<TDataCarResponse[]>("/cars");

      const carsUser = response.data;

      setModelInfoSetAllCarsCommonProfile(carsUser);

      const startIndex = (currentPageprofileComum - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;

      setModelInfoSetAllCarsCommonProfile(carsUser);

      const listPagination = carsUser.slice(startIndex, endIndex);

      setAllCarsCommonProfilePerPage(listPagination);
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado :(");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carUser();
  }, []);

  useEffect(() => {}, [darkMode]);

  useEffect(() => {
    carUser();
  }, [currentPageprofileComum]);

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        setLoading,
        userLogin,
        userRegister,
        logout,
        listCarsUser,
        userIdCars,
        darkMode,
        setListCarsUser,
        setUserIdCars,
        setDarkMode,
        modalForgottenOpen,
        setModalForgottenOpen,
        sendEmail,
        resetPassword,
        updateUser,
        profileEditModal,
        setProfileEditModal,
        deleteUser,
        addressEditModal,
        setAddressEditModal,
        allcarsUserPerPage2,
        currentPageprofile,
        setCurrentPageProfile,
        allcarsUser2,
        allCarsCommonProfilePerPage,
        currentPageprofileComum,
        setCurrentPageProfileComum,
        allcarsComumProfile,
        allcarsUser,
        setAllcarsUser,
        allcarsUserPerPage,
        setAllcarsUserPerPage,
        setAllcarsUserPerPage2,
        carUserSeller,
        userSelected,
        setUserSelected,
        carUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
