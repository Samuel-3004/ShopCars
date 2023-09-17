import { z } from "zod";
import { updateCarSchema } from "./utils";
import { ICarSeller } from "../../providers/UserProvider/@types";

export interface IUpdateModalProps {
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    car: ICarSeller | null;

}

export interface IDeleteModalProps {
    setDeleteCarModal: React.Dispatch<React.SetStateAction<boolean>>
    setUpdateModal: React.Dispatch<React.SetStateAction<boolean>>
    setDisableOutclickEvent: React.Dispatch<React.SetStateAction<boolean>>
    carId?: string | undefined
}


export type TUpdateSchema = z.infer<typeof updateCarSchema>;

export interface IChangeStyles {
    background?: string | undefined;
    textDecorationLine?: string | undefined;
}

export interface IObjectImages {
    img0?: string | undefined;
    img1?: string | undefined;
    img2?: string | undefined;
    img3?: string | undefined;
    img4?: string | undefined;
    img5?: string | undefined;
    img6?: string | undefined;
    img7?: string | undefined;
    img8?: string | undefined;
    img9?: string | undefined;
    img10?: string | undefined;
}
