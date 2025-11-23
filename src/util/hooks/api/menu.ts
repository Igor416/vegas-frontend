import { useState, useEffect } from "react"

import { getMenu } from "../../api"
import { MenuCategory } from "../../interfaces"

export function useMenu() {
  const [menu, setMenu] = useState<MenuCategory[]>([])

  useEffect(() => {
    getMenu().then(setMenu)
  }, [])

  return menu
}