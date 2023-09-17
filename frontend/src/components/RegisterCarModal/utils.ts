import { z } from "zod"

export const numberToMoney = (value: number) => {

    let result: string = value.toLocaleString()

    result = `R$ ${result},00`

    return result
}

export const handleValue = (event: React.FormEvent<HTMLInputElement>) => {
    const character = event.currentTarget

    character.value = valueMask(character.value)
}

function valueMask(value: string) {
    if (!value) return ''

    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{0})(\d)/, "$1R$ $2")
    value = value.replace(/(\d)(\d{8})$/, "$1.$2")
    value = value.replace(/(\d)(\d{5})$/, "$1.$2")
    value = value.replace(/(\d)(\d{2})$/, "$1,$2")

    return value
}

export const handleKm = (event: React.FormEvent<HTMLInputElement>) => {
    const character = event.currentTarget

    character.value = kmMask(character.value)
}

function kmMask(value: string) {
    if (!value) return ''

    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{0})(\d)/, "$1Km $2")
    value = value.replace(/(\d)(\d{6})$/, "$1.$2")
    value = value.replace(/(\d)(\d{3})$/, "$1.$2")

    return value
}

export const rectifyPrice = (payload: string): number => {
    payload = payload.split(' ')[1]
    payload = payload.split(',')[0]
    payload = payload.replace('.', '')
    payload = payload.replace('.', '')

    return Number(payload)
}

export const rectifyKm = (payload: string) => {
    payload = payload.split(' ')[1]
    payload = payload.replace('.', '')

    return Number(payload)
}

export const getFuelTipe = (number: number) => {
    if (number === 1) {
        return 'Flex'
    } else if (number === 2) {
        return 'Híbrido'
    } else if (number === 3) {
        return 'Elétrico'
    } else {
        return 'Indefinido'
    }
}

export const registerCarSchema = z.object({
    brand: z.string().nonempty('Marca é obrigatória *'),
    color: z.string().nonempty('Cor é obrigatória *'),
    year: z.string().nonempty('Ano é obrigatório *'),
    fuel: z.string().nonempty('Tipo de combustível é obrigatório *'),
    description: z.string().nonempty('Descrição é obrigatória *'),
    imgCover: z.string().nonempty('Imagem da capa é obrigatória *').url('Deve ser uma fonte url da imagem *'),
    km: z.string().nonempty('Quilometragem é obrigatória *'),
    model: z.string().nonempty('Modelo é obrigatório *'),
    price: z.string().nonempty('Preço é obrigatório *'),
    imgs: z.string().nonempty('Imagem da galeria é obrigatório *').url('Deve ser uma fonte url da imagem *').array()
})

export const bestPriceReckoning = (fipePrice: number, inputPrice: number) => {
    const result = inputPrice > fipePrice * 0.95 ?

        false : true
    return result
}

export const numberToKm = (number: number) => {
    const string = number.toString()
    let newString = ""
    for (let index = 0; index < string.length; index++) {
        newString = kmMask(newString + string[index])
    }
    return newString
}

export const numberToCash = (number: number) => {
    const string = number.toString()
    let newString = ""
    for (let index = 0; index < string.length; index++) {
        newString = valueMask(newString + string[index])
    }
    return newString
}