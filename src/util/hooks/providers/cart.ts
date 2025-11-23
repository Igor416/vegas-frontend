import { useContext } from "react"

import { CartContext, CartDispatchContext } from "../../providers"

export function useCartContext() {
  const products = useContext(CartContext)

  return products
}

export function useCartDispatchContext() {
  const dispatch = useContext(CartDispatchContext)

  return dispatch
}