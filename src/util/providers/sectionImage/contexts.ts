import { createContext, Dispatch } from "react"

import { Category } from "../../interfaces"

import { sectionImageAction } from "./action";

export const SectionImageContext = createContext<{
  category?: Category,
  collection?: string
}>({
  category: undefined,
  collection: undefined
});

export const SectionImageDispatchContext = createContext<Dispatch<sectionImageAction>>({} as Dispatch<sectionImageAction>);