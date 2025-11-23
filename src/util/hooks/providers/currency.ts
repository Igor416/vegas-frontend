import { useContext } from "react";

import { CurrencyContext, CurrencyDispatchContext } from "../../providers";

export function useCurrencyContext() {
  const currency = useContext(CurrencyContext)

  return currency
}

export function useCurrencyDispatchContext() {
  const dispatch = useContext(CurrencyDispatchContext)

  return dispatch
}