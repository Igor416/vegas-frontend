import type { Translatable, Price } from "./basic"
import type { Characteristic, CharacteristicType } from "./characteristic"
import type { Size } from "./size"

export type Product = {
  name: Translatable,
  discount: number,
  category: string
}

type Technology = {
  image: string,
  name: Translatable,
  desc: Translatable
}

export type SizeWithProduct = Size & {
  product: Product & {
    shortcut: string
  }
}

export type ListedProduct = Product & {
  best: boolean,
  desc: Translatable,
  shortcut: string,
  markers: string[],
  cheapestSize: Size
}

export type DetailedProduct = Omit<ListedProduct, 'cheapestSize'> & {
  sizes: Size[],
  images: string[],
  videos: string[],
  structure: Technology[],
  technologies: Technology[],
  characteristics: Array<{
    type: CharacteristicType,
    value: Characteristic
  }>
}

export type BasicProduct = Product & {
  size: string,
  quantity: number,
  price: Price,
  sum: Price
}

export type OrderedProduct = Omit<BasicProduct, 'size'> & {
  shortcut: string,
  size: Size
}