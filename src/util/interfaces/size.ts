import { Price } from "./basic";

export type Size = {
  width: number,
  length: number,
  price: Price,
  discount: number,
  onSale: boolean,
  outOfStock: boolean
}

export type SizeWithShortcut = Size & {
  shortcut: string
}