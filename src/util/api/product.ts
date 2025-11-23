import { DetailedProduct, ListedProduct } from "../interfaces";

import { api } from "./client";

export async function getProducts(category: string, subCategory: string, filter?: string): Promise<ListedProduct[]> {
  const url = `/api/products/${category}/${subCategory}/` + (filter ? filter + '/' : '')

  const response = await api.get<ListedProduct[]>(url);
  return response.data;
}

export async function getSales(): Promise<ListedProduct[]> {
  const url = '/api/sales/'

  const response = await api.get<ListedProduct[]>(url);
  return response.data;
}

export async function getProduct(category: string, name: string): Promise<DetailedProduct> {
  const url = `/api/product/${category}/${name}/`

  const response = await api.get<DetailedProduct>(url);
  return response.data;
}