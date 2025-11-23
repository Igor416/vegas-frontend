import { MenuCategory } from "../interfaces"

import { api } from "./client";

export async function getMenu(): Promise<MenuCategory[]> {
  const url = '/api/menu/'
  
  const response = await api.get<MenuCategory[]>(url);
  return response.data;
}