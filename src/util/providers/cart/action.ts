import { DetailedProduct, BasicProduct, Size, Price, Translatable } from "../../interfaces";

export type cartAction = {
  type: 'created',
  products: BasicProduct[]
} | {
  type: 'added',
  category: string,
  product: DetailedProduct,
  size: Size,
  currencies: Array<keyof Price>,
  quantity: number
} | {
  type: 'deleted',
  category: string,
  name: Translatable,
  size: Size
} | {
  type: 'updated',
  category: string,
  name: Translatable,
  size: Size,
  currencies: Array<keyof Price>,
  quantity: number
}