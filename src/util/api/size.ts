import { SizeWithShortcut } from "../interfaces"

import { api } from "./client";

export async function getSize(category: string, product: string, dimensions: string) {
  const url = `/api/size/${category}/${product}/${dimensions}/`

  const response = await api.get<SizeWithShortcut>(url);
  return response.data;
}