import { api } from "../api"

import { IResponseGetProducts, Product } from "./@types";

export async function findAllProducts(): Promise<Product[]> {
  const response = await api.get<IResponseGetProducts>('/products');

  return response.data;
}