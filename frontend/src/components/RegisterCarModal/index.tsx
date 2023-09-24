import { useEffect, useState, LegacyRef, useContext } from "react";
import {
  AddImagesContainer,
  DualFields,
  ErrorModal,
  FieldsetModal,
  FormModalContainer,
  ModalButtonContainer,
  ModalContainer,
  ModalWrapper,
  TitleModal,
  TitleOptions,
} from "./style";
import {
  IFipeOptions,
  IHandleCreateCarData,
  IModalProps,
  IModelInfo,
  IModels,
  IModelsOptions,
  IPayloadCreateCar,
  TRegisterCarForm,
} from "./@types";
import { useForm } from "react-hook-form";
import { fipeApi } from "../../services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import useOutClick from "../../hooks/useOutclick";
import {
  bestPriceReckoning,
  getFuelTipe,
  handleKm,
  handleValue,
  numberToMoney,
  rectifyKm,
  rectifyPrice,
  registerCarSchema,
} from "./utils";
import { AxiosResponse } from "axios";
import { CarContext } from "../../providers/CarProvider/CarContext";
import { UserContext } from "../../providers/UserProvider/UserContext";
import Loading from "../Loading";
import { ICar, TCarRequest } from "../../providers/CarProvider/@types";
import { handleNumber } from "../RegisterForm/utils";
import { MdOutlineAddCircle } from "react-icons/md";

const carInfoDefault = {
  brand: "brand",
  fuel: 0,
  id: "id",
  name: "name",
  value: 0,
  year: "ano",
};

const RegisterCarModal = ({ setModal }: IModalProps) => {
  const [fipeOptions, setFipeOptions] = useState<IFipeOptions>();
  const [anotherOption, setAnotherOption] = useState<boolean>(false);
  const [models, setModels] = useState<IModels[]>([]);
  const [modelInfo, setModelInfo] = useState<IModelInfo[]>([]);
  const [loadModels, setLoadModels] = useState<boolean>(false);
  const [extraImagesFields, setExtraImagesFields] = useState(0);
  const [carInfo, setCarInfo] = useState(carInfoDefault);

  let darkMode: boolean | null = JSON.parse(
    localStorage.getItem("@darkMode") || "null"
  );

  darkMode !== true ? (darkMode = false) : (darkMode = true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterCarForm>({
    resolver: zodResolver(registerCarSchema),
  });
  const { carRegister, registerCarImage } = useContext(CarContext);
  const { loading, carUser } = useContext(UserContext);

  const modalRef = useOutClick(() => setModal(false));

  useEffect(() => {
    fipeApi
      .get(`/cars`)
      .then((response) => {
        setFipeOptions(response.data);
      })
      .catch((error) => console.log(error));

    return () => {
      carUser();
    };
// eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getModelOptions = async (model: IModelsOptions) => {
    if (model === "another") {
      setAnotherOption(true);
      return null;
    } else {
      setAnotherOption(false);
    }

    const modelArray: IModels[] | undefined = fipeOptions![model];
    setModels(modelArray!);
    try {
      setLoadModels(true);
      const modelOptions = await fipeApi.get(`/cars`, {
        params: { brand: model },
      });
      setModelInfo(modelOptions.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadModels(false);
    }
  };

  const getCarInfo = (selectedCar: string) => {
    if (selectedCar !== "") {
      const carFound = modelInfo.find((car) => car.name === selectedCar);
      setCarInfo(carFound!);
    } else {
      setCarInfo(carInfoDefault);
    }
  };

  const registerCar = async (payload: IPayloadCreateCar) => {
    const createCarData: IHandleCreateCarData = {
      ...payload,
    };

    if (anotherOption) {
      createCarData.bestPrice = false;
      createCarData.year = payload.year;
      createCarData.fuel = payload.fuel;
      createCarData.price = rectifyPrice(createCarData.price as string);
      createCarData.km = rectifyKm(createCarData.km as string);
    } else {
      createCarData.price = rectifyPrice(createCarData.price as string);
      createCarData.km = rectifyKm(createCarData.km as string);
      createCarData.bestPrice = bestPriceReckoning(
        carInfo.value,
        createCarData.price
      );
    }

    const { imgs } = createCarData;
    delete createCarData.imgs;

    let carId: string = "";

    await carRegister(createCarData as TCarRequest)
      .then((res: AxiosResponse<ICar>) => (carId = res.data.id))
      .then(async () => {
        for (let index = 0; index < imgs!.length; index++) {
          const addImageObject = {
            imgGalery: imgs![index],
            carId: carId,
          };
          await registerCarImage(addImageObject);
        }
        setModal(false);
      })
      .catch((error) => console.log(error));
  };

  const addImageField = (): number[] => {
// eslint-disable-next-line prefer-const
    let result: number[] = [];
    for (let index: number = 0; index < extraImagesFields; index++) {
      result.push(index);
    }
    return result;
  };

  const handleErrorField = (field: number) => {
    const errorField = errors.imgs || null;

    if (errorField) {
      const errorMessage = errors.imgs![field]?.message;
      return <ErrorModal>{errorMessage}</ErrorModal>;
    }
    return null;
  };

  const anotherFuelOptions = (fipeFuelOption: string = "Flex") => {
    const allFuelOptions = [
      { fuelTipe: "Flex" },
      { fuelTipe: "Híbrido" },
      { fuelTipe: "Elétrico" },
      { fuelTipe: "Gás Natural Veicular" },
      { fuelTipe: "Álcool" },
      { fuelTipe: "Gasolina" },
    ];

    const newAnotherOptions = allFuelOptions.filter(
      (fuel) => fuel.fuelTipe !== fipeFuelOption
    );

    return (
      <>
        {newAnotherOptions.map((option) => (
          <option value={option.fuelTipe} key={`fuel_${option.fuelTipe}`}>
            {option.fuelTipe}
          </option>
        ))}
      </>
    );
  };

  return (
    <ModalWrapper role="dialog" dark={darkMode}>
      <ModalContainer
        ref={modalRef as LegacyRef<HTMLDivElement>}
        dark={darkMode}
      >
        <FormModalContainer
          onSubmit={handleSubmit(registerCar)}
          dark={darkMode}
        >
          <TitleModal dark={darkMode}>
            <h3>Criar anúncio</h3>
            <span onClick={() => setModal(false)}>X</span>
          </TitleModal>
          <TitleOptions dark={darkMode}>
            <h4>Informações do veículo</h4>
          </TitleOptions>
          <FieldsetModal dark={darkMode}>
            <label htmlFor="carBrand">Marca</label>
            <select
              {...register("brand")}
              onChange={(event) =>
                event.target.value !== "" &&
                getModelOptions(event.target.value as IModelsOptions)
              }
            >
              <option value="">Selecione a marca</option>
              <option value="chevrolet">Chevrolet</option>
              <option value="citroën">Citröen</option>
              <option value="fiat">Fiat</option>
              <option value="ford">Ford</option>
              <option value="honda">Honda</option>
              <option value="hyundai">Hyunday</option>
              <option value="nissan">Nissan</option>
              <option value="peugeot">Peugeot</option>
              <option value="renault">Renault</option>
              <option value="toyota">Toyota</option>
              <option value="volkswagen">Volkswagen</option>
              <option value="another">Outro</option>
            </select>
            {errors.brand?.message && (
              <ErrorModal>{errors.brand.message}</ErrorModal>
            )}
          </FieldsetModal>
          {anotherOption && (
            <input
              className="another_brand_input"
              id="carBrand"
              placeholder="Informe a marca"
              {...register("brand")}
            />
          )}
          {anotherOption ? (
            <FieldsetModal dark={darkMode}>
              <label htmlFor="carModel">Modelo</label>
              <input
                id="carModel"
                placeholder="Informe o modelo"
                {...register("model")}
              />
            </FieldsetModal>
          ) : (
            <FieldsetModal dark={darkMode}>
              <label>Modelo</label>
              <select
                disabled={loadModels}
                {...register("model")}
                onChange={(event) => getCarInfo(event.target.value)}
              >
                <option value="">Selecione o modelo</option>
                {models.map((model, index) => (
                  <option key={`model${index}`} value={model.name}>
                    {model.name}
                  </option>
                ))}
              </select>
              {errors.model?.message && (
                <ErrorModal>{errors.model.message}</ErrorModal>
              )}
            </FieldsetModal>
          )}
          <DualFields dark={darkMode}>
            <FieldsetModal dark={darkMode}>
              <label
                // style={
                //   darkMode
                //     ? { color: "var(--white)" }
                //     : { color: "var(--gray)" }
                // }
              >
                Ano
              </label>
              <input
                maxLength={4}
                onKeyUp={(event) => handleNumber(event)}
                placeholder={carInfo ? carInfo.year : "Informe o ano"}
                {...register("year")}
              />
              {errors.year?.message && (
                <ErrorModal>{errors.year.message}</ErrorModal>
              )}
            </FieldsetModal>
            <FieldsetModal dark={darkMode}>
              <label
                htmlFor="fuel"
                // style={
                //   darkMode
                //     ? { color: "var(--white)" }
                //     : { color: "var(--gray)" }
                // }
              >
                Combustível
              </label>
              {anotherOption ? (
                <select id="fuel" {...register("fuel")}>
                  <option value="">Selecione combustível</option>
                  <option value="Flex">Flex</option>
                  <option value="Híbrido">Híbrido</option>
                  <option value="Elétrico">Elétrico</option>
                  <option value="Gás Natural Veicular">
                    Gás Natural Veicular
                  </option>
                  <option value="Álcool">Álcool</option>
                  <option value="Gasolina">Gasolina</option>
                </select>
              ) : (
                <select id="fuel" {...register("fuel")}>
                  <option value={getFuelTipe(carInfo.fuel)}>
                    {getFuelTipe(carInfo.fuel)}
                  </option>
                  {anotherFuelOptions(getFuelTipe(carInfo.fuel))}
                </select>
              )}
              {errors.fuel?.message && (
                <ErrorModal>{errors.fuel.message}</ErrorModal>
              )}
            </FieldsetModal>
          </DualFields>
          <DualFields dark={darkMode}>
            <FieldsetModal dark={darkMode}>
              <label
                // style={
                //   darkMode
                //     ? { color: "var(--white)" }
                //     : { color: "var(--gray)" }
                // }
              >
                Quilometragem
              </label>
              <input
                placeholder="informe a quilometragem"
                {...register("km")}
                onKeyUp={(event) => handleKm(event)}
                maxLength={12}
              />
              {errors.km?.message && (
                <ErrorModal>{errors.km.message}</ErrorModal>
              )}
            </FieldsetModal>
            <FieldsetModal dark={darkMode}>
              <label
                // style={
                //   darkMode
                //     ? { color: "var(--white)" }
                //     : { color: "var(--gray)" }
                // }
              >
                Cor
              </label>
              <select disabled={loadModels} {...register("color")}>
                <option value="">Selecione a cor</option>
                <option value="branca">Branca</option>
                <option value="preta">Preta</option>
                <option value="azul">Azul</option>
                <option value="cinza">Cinza</option>
                <option value="prata">Prata</option>
                <option value="amarela">Amarela</option>
                <option value="vermelha">Vermelha</option>
                <option value="marrom">Marrom</option>
                <option value="verde">Verde</option>
                <option value="laranja">Laranja</option>
              </select>
              {errors.color?.message && (
                <ErrorModal>{errors.color.message}</ErrorModal>
              )}
            </FieldsetModal>
          </DualFields>
          <DualFields dark={darkMode}>
            <FieldsetModal dark={darkMode}>
              <label
                htmlFor="fipePrice"
                // style={
                //   darkMode
                //     ? { color: "var(--white)" }
                //     : { color: "var(--gray)" }
                // }
              >
                Preço tabela FIPE
              </label>
              <input
                disabled
                id="fipePrice"
                value={
                  anotherOption
                    ? "Marca sem dados FIPE"
                    : numberToMoney(carInfo.value)
                }
              />
            </FieldsetModal>
            <FieldsetModal dark={darkMode}>
              <label
                htmlFor="price"
                // style={
                //   darkMode
                //     ? { color: "var(--white)" }
                //     : { color: "var(--gray)" }
                // }
              >
                Preço
              </label>
              <input
                id="price"
                placeholder={
                  anotherOption
                    ? "Melhor preço indisponível"
                    : `${numberToMoney(
                        Math.round(carInfo.value * 0.95)
                      )} (Bom preço)`
                }
                onKeyUp={(event) => handleValue(event)}
                {...register("price")}
                maxLength={17}
              />
              {errors.price?.message && (
                <ErrorModal>{errors.price.message}</ErrorModal>
              )}
            </FieldsetModal>
          </DualFields>
          <FieldsetModal dark={darkMode}>
            <label
              htmlFor="description"
              // style={
              //   darkMode ? { color: "var(--white)" } : { color: "var(--gray)" }
              // }
            >
              descrição
            </label>
            <textarea
              id="description"
              placeholder="Digite a descrição"
              {...register("description")}
            />
            {errors.description?.message && (
              <ErrorModal>{errors.description.message}</ErrorModal>
            )}
          </FieldsetModal>
          <FieldsetModal dark={darkMode}>
            <label
              htmlFor="imgCover"
              // style={
              //   darkMode ? { color: "var(--white)" } : { color: "var(--gray)" }
              // }
            >
              Imagem da capa
            </label>
            <input
              id="imgCover"
              placeholder="url da imagem"
              {...register("imgCover")}
            />
            {errors.imgCover?.message && (
              <ErrorModal>{errors.imgCover.message}</ErrorModal>
            )}
          </FieldsetModal>
          <FieldsetModal dark={darkMode}>
            <label
              htmlFor="imgGallery_1"
              // style={
              //   darkMode ? { color: "var(--white)" } : { color: "var(--gray)" }
              // }
            >
              1º imagem da galeria
            </label>
            <input
              id="imgGallery_1"
              placeholder="url da imagem"
              {...register("imgs.0")}
            />
            {handleErrorField(0)}
          </FieldsetModal>
          <FieldsetModal dark={darkMode}>
            <label
              htmlFor="imgGallery_2"
              // style={
              //   darkMode ? { color: "var(--white)" } : { color: "var(--gray)" }
              // }
            >
              2º imagem da galeria
            </label>
            <input
              id="imgGallery_2"
              placeholder="url da imagem"
              {...register("imgs.1")}
            />
            {handleErrorField(1)}
          </FieldsetModal>
          {extraImagesFields > 0 ? (
            <>
              {addImageField().map((field) => (
                <FieldsetModal key={`extraField${field}`} dark={darkMode!}>
                  <label htmlFor={`imgGallery_${field + 3}`}>
                    {field + 3}º imagem da galeria
                  </label>
                  <input
                    id={`imgGallery_${field + 3}`}
                    placeholder="url da imagem"
                    {...register(`imgs.${field + 2}`)}
                  />
                  {handleErrorField(field + 2)}
                </FieldsetModal>
              ))}
            </>
          ) : null}
          <AddImagesContainer dark={darkMode}>
            {extraImagesFields < 8 ? (
              <button
                type="button"
                onClick={() => setExtraImagesFields(extraImagesFields + 1)}
              >
                <MdOutlineAddCircle />
                Adicionar campo para imagem
              </button>
            ) : null}
          </AddImagesContainer>
          <ModalButtonContainer dark={darkMode}>
            <button
              type="button"
              onClick={() => setModal(false)}
              className="cancel"
            >
              Cancelar
            </button>
            <button type="submit" disabled={loading}>
              {loading ? <Loading /> : "Criar anúncio"}
            </button>
          </ModalButtonContainer>
        </FormModalContainer>
      </ModalContainer>
    </ModalWrapper>
  );
};

export default RegisterCarModal;
