import { useEffect, useState } from "react";

import { Category, Product } from "../../interfaces";
import { getCategories } from "../../api";

import { useCategoriesContext } from "../providers";

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    getCategories().then(setCategories)
  }, [])

  return categories
}

export function useCategory(product: Product) {
  const { categories } = useCategoriesContext()
  return categories.find(c => c.name === product.category)!
}