import { ProviderProps, useCallback, useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"

import { useCategories } from "../../hooks/"
import { Category } from "../../interfaces"

import { CategoriesContext } from "./contexts"

export function CategoriesProvider({children}: ProviderProps<null>) {
  const categories = useCategories()
  const [activeCategory, setActiveCategory] = useState<Category>()
  const params = useParams()
  const location = useLocation()

  const findCategory = useCallback((name: string) => {
    return categories.find(c => c.name === name)
  }, [categories])

  useEffect(() => {
    if (params.category) {
      setActiveCategory(findCategory(params.category))
    }
  }, [categories, findCategory, params.category])

  useEffect(() => {
    if (location.pathname === '/sales') {
      setActiveCategory(findCategory('sales'))
    }
  }, [findCategory, location.pathname])

  return <CategoriesContext.Provider value={{categories, activeCategory}}>
    {children}
  </CategoriesContext.Provider>
}