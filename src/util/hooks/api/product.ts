import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { BasicProduct, DetailedProduct, ListedProduct, OrderedProduct } from "../../interfaces";
import { getProduct, getProducts, getSales, getSize } from "../../api";

import { useCartContext } from "../providers";

export function useProducts(category: string, subCategory?: string, filter?: string) {
  const [products, setProducts] = useState<ListedProduct[]>([])
  const params = useParams()

  useEffect(() => {
    if (category === 'sales') {
      getSales().then(setProducts)
    } else if (category == params.category && subCategory) {
      getProducts(category, subCategory, filter).then(setProducts)
    }
  }, [filter, category, subCategory, params.category])

  return products
}

export function useProduct(category?: string, name?: string) {
  const [product, setProduct] = useState<DetailedProduct>()
  const params = useParams()

  useEffect(() => {
    if (category && category == params.category && name) {
      getProduct(category, name).then(setProduct)
    }
  }, [category, name, params.category])

  return product
}

export function useOrderedProducts() {
  const cachedProducts = useCartContext()
  const [products, setProducts] = useState<OrderedProduct[]>([])

  useEffect(() => {
    if (cachedProducts.length > 0) {
      if (cachedProducts.length != products.length) {
        const fetchedProducts: OrderedProduct[] = []
        for (const cachedProduct of cachedProducts) {
          const [width, length] = cachedProduct.size.replace(' ', '').split('x').map(Number)
          getSize(cachedProduct.category, cachedProduct.name.en, cachedProduct.size).then(data => {
            fetchedProducts.push({
              ...cachedProduct,
              size: {
                ...data,
                width: width,
                length: length
              },
              shortcut: data.shortcut
            })
            if (fetchedProducts.length === cachedProducts.length) {
              setProducts(fetchedProducts)
            }
          })
        }
      } else {
        let found = false;
        const changedProducts = [...products]
        const predicate = (p1: OrderedProduct, p2: BasicProduct) => {
          return p2.name === p1.name && p2.category === p1.category && p2.size === p1.size.width + 'x' + p1.size.length
        }
        for (const cachedProduct of cachedProducts) {
          const index = changedProducts.findIndex(p => predicate(p, cachedProduct))
          if (index > -1) {
            if (cachedProduct.quantity === changedProducts[index].quantity) {
              continue
            }
            found = true
            changedProducts[index].quantity = cachedProduct.quantity
          }
        }
        if (found) {
          setProducts(changedProducts)
        }
      }
    } else if (products.length > 0) {
      setProducts([])
    }
  }, [cachedProducts, products])

  return products
}