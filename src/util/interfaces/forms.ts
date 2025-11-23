import type { Price } from "./basic"

export type Review = {
  title: string,
  date: string,
  city: string,
  text: string,
}

export type Search = {
  search: string,
}

export type SearchResults = {
  categories: Array<{
    link: string,
    text: string,
    count: string
  }>,
  products: Array<{
    link: string,
    text: string,
    price: Price,
    discount: number
  }>
}