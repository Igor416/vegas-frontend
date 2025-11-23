import { Category } from "../interfaces"

import { api } from "./client";

export async function getCategories() {
  const url = '/api/categories/'

  const response = await api.get<Category[]>(url);
  return response.data;
}