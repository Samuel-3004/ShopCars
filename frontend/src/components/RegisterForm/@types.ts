export interface ICreateUser {
    "name": string
    "email": string
    "password": string
    "confirmPassword": string
    "seller": boolean | string
    "cellPhone": string
    "cpf": string
    "dateOfBirth": string
    "description": string
    "cep": string
    "city": string
    "state": string
    "street": string
    "number": number
    "complement": string
}

export interface IChangeStyles {
    background?: string | undefined
}