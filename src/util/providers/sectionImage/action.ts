import { Category } from "../../interfaces";

export type sectionImageAction = {
  type: 'default',
} | {
  type: 'setCategory',
  category: Category
} | {
  type: 'setCollection',
  category: Category,
  collection: string
}