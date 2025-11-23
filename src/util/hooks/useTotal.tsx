import { useEffect, useState } from "react";

import { BasicProduct, OrderedProduct } from "../interfaces";

import { useCurrencyContext } from "./providers";

export function useTotal(products: Array<BasicProduct | OrderedProduct>) {
  const currency = useCurrencyContext()
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(products.reduce((a, b) => a + b.sum[currency], 0))
  }, [products, currency])

  return {total, currency}
}