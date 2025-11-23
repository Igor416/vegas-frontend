import { useContext } from "react";

import { CategoriesContext } from "../../providers";

export function useCategoriesContext() {
  const { categories, activeCategory } = useContext(CategoriesContext)

  return { categories, activeCategory }
}