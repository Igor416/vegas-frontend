import { ProviderProps, useReducer } from "react"

import { Category } from "../../interfaces"

import { SectionImageContext, SectionImageDispatchContext } from "./contexts"
import { SectionImageReducer } from "./reducer"

export function SectionImageProvider({children, value}: ProviderProps<{category?: Category, collection?: string}>) {
  const [data, dispatch] = useReducer(SectionImageReducer, value)

  return <SectionImageContext.Provider value={data}>
    <SectionImageDispatchContext.Provider value={dispatch}>
      {children}
    </SectionImageDispatchContext.Provider>
  </SectionImageContext.Provider>
}