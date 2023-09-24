
export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IImageContext {
  allImages: [] | TListImages;
  newImageCar: IImage | null;
  setAllImages: React.Dispatch<React.SetStateAction<[] | TListImages>>;
  setNewImageCar: React.Dispatch<React.SetStateAction<IImage | null>>;
  registerImage: (formData: TImageRequest) => Promise<void>;
  editeImage: (formData: IImageUpdate, imageId: string) => Promise<void>;
  deleteImage: (imageId: string) => Promise<void>;
  setModalImage: React.Dispatch<React.SetStateAction<boolean>>;
  modalImage: boolean;
  imageById: string;
  setImageById: React.Dispatch<React.SetStateAction<string>>;
}

export interface IImage {
  id: string;
  imgGalery: string;
  carId: string;
}

export type TImageRequest = Omit<IImage, "id">;

export type TListImages = IImage[]


export interface IImageUpdate{
	imgGalery: string;
}
