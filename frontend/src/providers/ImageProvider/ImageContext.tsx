import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { IImage, IImageContext, IImageUpdate, TImageRequest, TListImages } from "./@types";
import { IDefaultProviderProps } from "./@types";

export const ImageContext = createContext({} as IImageContext);

export const ImageProvider = ({ children }: IDefaultProviderProps) => {
  const [allImages, setAllImages] = useState<TListImages | []>([]);
  const [newImageCar, setNewImageCar] = useState<IImage | null>(null);
  const [modalImage, setModalImage] = useState<boolean>(false);
  const [imageById, setImageById] = useState<string>("");

  useEffect(() => {
    const allImages = async () => {
      try {
        const response = await api.get<TListImages | []>(`/images`);

        setAllImages(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    allImages();
  }, []);

  const registerImage = async (formData: TImageRequest) => {
    const token = localStorage.getItem("@userToken");

    if (token) {
      try {
        const response = await api.post<IImage>("/images", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setNewImageCar(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const editeImage = async (formData: IImageUpdate, imageId: string) => {
    const token = localStorage.getItem("@userToken");

    if (token) {
      try {
        const response = await api.patch<IImage>(
          `/images/${imageId}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const newListImages = allImages.map((image) => {
          if (image.id === imageId) {
            return response.data;
          } else {
            return image;
          }
        });

        setAllImages(newListImages);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const deleteImage = async (imageId: string) => {
    const token = localStorage.getItem("@userToken");

    if (token) {
      try {
        await api.delete(`/images/${imageId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const imageFind = allImages.find((image) => image.id === imageId);

        if (!imageFind) {
        } else {
          const newListImages = allImages.filter((image) => {
            if (image !== imageFind) {
              return image;
            }
          });

          setAllImages(newListImages);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <ImageContext.Provider
      value={{
        allImages,
        newImageCar,
        setAllImages,
        setNewImageCar,
        registerImage,
        editeImage,
        deleteImage,
        setModalImage,
        modalImage,
        imageById,
        setImageById,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};
