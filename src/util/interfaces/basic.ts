export type Price = {
  EUR: number,
  MDL: number,
  RON: number,
  USD: number,
  [key: string]: number
}

export type Translatable = {
  en: string,
  ru: string,
  ro: string,
  [key: string]: string
}

export type Category = {
  name: string,
  nameS: Translatable,
  namePl: Translatable,
  desc: Translatable
}