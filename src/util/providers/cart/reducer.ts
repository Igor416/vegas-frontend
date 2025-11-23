import { BasicProduct } from "../../interfaces";

import { cartAction } from "./action";

export function CartReducer(products: BasicProduct[], action: cartAction): BasicProduct[] {
  switch (action.type) {
    case 'created': {
      return action.products
    }
    case 'added': {
      const pr = products.find(pr => 
        pr.name === action.product.name
        &&
        pr.category === action.category
        &&
        pr.size === action.size.width + 'x' + action.size.length
      );
      if (pr) {
        return CartReducer(products, {
          type: 'updated',
          category: action.category,
          name: action.product.name,
          size: action.size,
          currencies: action.currencies,
          quantity: pr.quantity + action.quantity
        })
      }
      const dummy = {EUR: 0, MDL: 0, RON: 0, USD: 0}
      const newProduct: BasicProduct = {
        category: action.category,
        name: action.product.name,
        discount: action.product.discount,
        size: action.size.width + 'x' + action.size.length,
        quantity: action.quantity,
        price: {...dummy},
        sum: {...dummy}
      }

      for (const currency of action.currencies) {
        newProduct.price[currency] = action.size.price[currency];
        newProduct.sum[currency] = action.size.price[currency] * action.quantity * (100 - action.product.discount) / 100
      }
      return [...products, newProduct]
    }
    case 'deleted': {
      return products.filter(pr => !(
        pr.name === action.name
        &&
        pr.category === action.category
        &&
        pr.size === action.size.width + 'x' + action.size.length
      ))
    }
    case 'updated': {
      return products.map(pr => {
        if (pr.name === action.name && pr.category === action.category && pr.size === action.size.width + 'x' + action.size.length) {
          for (const currency of action.currencies) {
            pr.sum[currency] = +(pr.sum[currency] * action.quantity / pr.quantity).toFixed(2)
          }
          pr.quantity = action.quantity
          return pr
        }
        return pr
      })
    }
  }
}