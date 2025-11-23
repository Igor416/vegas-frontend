import { useCallback, useEffect, useState } from "react"
import { useCookies } from "react-cookie"

import { BasicProduct, Translatable } from "../interfaces"

export function useCachedProducts(): [BasicProduct[], (val: BasicProduct[]) => void] {
  const encodeProducts = useCallback((products: BasicProduct[]): string => {
    let s = ''
    for (const product of products) {
      for (const key in product) {
        if (key === 'price' || key === 'sum') {
          for (const currency in product[key]) {
            s += `${key + currency}=${product[key][currency]};`
          }
        } else if (key === 'name') {
          for (const lang in product.name) {
            s += `${key}_${lang}=${product.name[lang]};`
          }
        } else {
          s += `${key}=${product[key as keyof BasicProduct]};`
        }
      }
      s += '/'
    }
    
    return s
  }, [])
  
  const decodeProducts = useCallback((s: string): BasicProduct[] => {
    const products: BasicProduct[] = []
    if (s === undefined) {
      return products
    }
    const dummy = {EUR: 0, MDL: 0, RON: 0, USD: 0}
    for (const productDec of s.split('/').slice(0, -1)) {
      const productEnc: BasicProduct = {
        category: '',
        name: {
          en: '',
          ru: '',
          ro: ''
        },
        discount: 0,
        size: '',
        quantity: 0,
        price: {...dummy},
        sum: {...dummy}
      }
      for (const pair of productDec.split(';').slice(0, -1)) {
        const [key, value] = pair.split('=')
        if (key.startsWith('price') || key.startsWith('sum')) {
          productEnc[key.slice(0, -3) as 'price' | 'sum'][key.slice(-3)] = Number(value)
        } else if (key.startsWith('name')) {
          productEnc.name[key.split('_')[1] as keyof Translatable] = value
        } else if (key === 'discount' || key === 'quantity') {
          productEnc[key] = Number(value)
        } else if (key === 'category' || key === 'size') {
          productEnc[key] = value
        }
      }
      
      products.push(productEnc)
    }
    
    return products
  }, [])

  const [cookies, setCookie] = useCookies(['products'])
  const [products, setProducts] = useState<BasicProduct[]>(decodeProducts(cookies.products))

  useEffect(() => {
    const s = encodeProducts(products)
    if (s !== cookies.products) {
      setCookie('products', s, {path: '/'})
    }
  }, [cookies.products, encodeProducts, products, setCookie])

  return [products, setProducts]
}