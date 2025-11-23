import type { Price, Translatable } from "./basic"
import type { SizeWithProduct } from "./product"

export type MenuCategory = {
  image: string
  name: Translatable
  sizes: SizeWithProduct[]
  subCategories: MenuSubCategory[]
}

export type MenuSubCategory = {
  value: string,
  category: string,
  name: Translatable,
  filters: MenuFilter[]
}

export type MenuFilter = {
  value: string,
  name: Translatable,
  price?: Price | null
}