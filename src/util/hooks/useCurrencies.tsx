import { useEffect, useMemo, useState } from "react"
import { useCookies } from "react-cookie"

import { Price } from "../interfaces"

export function useCurrencies(): Array<keyof Price> {
  const [cookies] = useCookies(['country'])
  const allCurrencies: {[key: string]: Array<keyof Price>} = useMemo(() => ({
    'MD': ['MDL', 'EUR'],
    'EU': ['EUR', 'MDL'],
  }), [])
  const [currencies, setCurrencies] = useState<Array<keyof Price>>(allCurrencies['MD'])

  useEffect(() => {
    if (cookies.country === 'MD') {
      setCurrencies(allCurrencies.EU)
    } else {
      setCurrencies(allCurrencies.MD)
    }
  }, [allCurrencies, cookies.country])

  return currencies
}