import { createContext } from "react"

import { Category } from "../../interfaces"

export const CategoriesContext = createContext<{
  categories: Category[],
  activeCategory?: Category
}>({
  categories: [],
  activeCategory: undefined
});