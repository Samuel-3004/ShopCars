
export interface IDefaultProviderProps {
  children: React.ReactNode;
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
