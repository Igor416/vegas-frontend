import { Price } from "../../interfaces";

export type currencyAction = {
  type: 'updated',
  currency: keyof Price
}