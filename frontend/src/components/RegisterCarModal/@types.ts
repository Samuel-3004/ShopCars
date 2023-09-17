import { z } from 'zod'
import { registerCarSchema } from './utils'

export interface IModalProps {
    setModal: React.Dispatch<React.SetStateAction<boolean>>
}

export type TRegisterCarForm = z.infer<typeof registerCarSchema>

export interface IFipeCars {
    id: string
    name: string
    brand: string
    year: string
    fuel: number
    value: number
}

export interface IUpdateCars {
    brand: string
    model: string
    year: string
    km: string | number
    color: string
    price: string | number
    description: string
    status: string | boolean
    imgCover: string | URL
    bestPrice?: boolean | undefined
    imgs?: string[] | URL[] | undefined
}

export interface IModels {
    name: string
}

export type IModelsOptions =
    "chevrolet" |
    "citroën" |
    "fiat" |
    "ford" |
    "honda" |
    "hyundai" |
    "nissan" |
    "peugeot" |
    "renault" |
    "toyota" |
    "volkswagen" |
    "another"

export interface IFipeOptions {
    chevrolet: IModels[]
    citroën: IModels[]
    fiat: IModels[]
    ford: IModels[]
    honda: IModels[]
    hyundai: IModels[]
    nissan: IModels[]
    peugeot: IModels[]
    renault: IModels[]
    toyota: IModels[]
    volkswagen: IModels[]
    another?: IModels[] | undefined
}

export interface IModelInfo {
    brand: string
    fuel: number
    id: string
    name: string
    value: number
    year: string
}

export interface IPayloadCreateCar {
    brand: string
    color: string
    description: string
    imgCover: string
    imgs: string[]
    km: string
    model: string
    price: string
    year: string
    fuel: string
}

export interface IHandleCreateCarData {
    bestPrice?: boolean | undefined
    brand: string
    color: string
    description: string
    fuel: string
    imgCover: string
    km: string | number
    model: string
    price: string | number
    year: string
    imgs?: string[] | undefined
}
