import type { Translatable } from "./basic"

export type CharacteristicType = {
  name: string
  label: Translatable
  inDescription: boolean
}

export type Characteristic = Translatable | Translatable[] | number | boolean