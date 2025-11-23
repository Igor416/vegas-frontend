import { ProviderProps, useReducer } from "react"

import { Price } from "../../interfaces";

import { CurrencyContext, CurrencyDispatchContext } from "./contexts"
import { CurrencyReducer } from "./reducer"

export function CurrencyProvider({children, value}: ProviderProps<keyof Price>) {
  const [currency, dispatch] = useReducer(CurrencyReducer, value)
  
  return <CurrencyContext.Provider value={currency}>
    <CurrencyDispatchContext.Provider value={dispatch}>
      {children}
    </CurrencyDispatchContext.Provider>
  </CurrencyContext.Provider>
}