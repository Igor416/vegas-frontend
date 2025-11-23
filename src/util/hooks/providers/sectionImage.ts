import { useContext } from "react"

import { SectionImageContext, SectionImageDispatchContext } from "../../providers"

export function useSectionImageContext() {
  const { category, collection } = useContext(SectionImageContext)

  return { category, collection }
}

export function useSectionImageDispatchContext() {
  const dispatch = useContext(SectionImageDispatchContext)

  return dispatch
}