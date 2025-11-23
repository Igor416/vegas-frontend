import { ProviderProps, useReducer, useEffect } from "react"

import { useCachedProducts } from "../../hooks"
import { BasicProduct } from "../../interfaces"

import { CartContext, CartDispatchContext } from "./contexts"
import { CartReducer } from "./reducer"

export function CartProvider({children, value}: ProviderProps<BasicProduct[]>) {
  const [cachedProducts, setCachedProducts] = useCachedProducts()
  const [products, dispatch] = useReducer(CartReducer, value)

  useEffect(() => {
    dispatch({type: 'created', products: cachedProducts})
  }, [])
  
  useEffect(() => {
    setCachedProducts(products)
  }, [products, setCachedProducts])

  return <CartContext.Provider value={products}>
    <CartDispatchContext.Provider value={dispatch}>
      {children}
    </CartDispatchContext.Provider>
  </CartContext.Provider>
}