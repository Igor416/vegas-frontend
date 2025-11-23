import { Category } from "../../interfaces";

import { sectionImageAction } from "./action";

export function SectionImageReducer(_: {category?: Category, collection?: string}, action: sectionImageAction) {
  switch (action.type) {
    case 'default': {
      return {
        category: undefined,
        collection: undefined
      }
    }
    case 'setCategory': {
      return {
        category: action.category,
        collection: undefined
      }
    }
    case 'setCollection': {
      return {
        category: action.category,
        collection: action.collection
      }
    }
  }
}