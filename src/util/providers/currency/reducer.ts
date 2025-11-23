import { Price } from "../../interfaces";

import { currencyAction } from "./action";

export function CurrencyReducer(_: keyof Price, action: currencyAction) {
  switch (action.type) {
    case 'updated': {
      return action.currency
    }
  }
}