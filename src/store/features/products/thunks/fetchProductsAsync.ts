import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";

import { Product } from "../@types";

import { STATUS } from "../initialState";

import { findAllProducts } from "../../../../services/products";

export const fetchProductsAsync = createAsyncThunk<Product[]>(
  'products/fetch',
  async () => {
    const response = await new Promise<{ data: Promise<Product[]> }>((resolve) =>
      setTimeout(() => resolve({ data: findAllProducts() }), 5000),
    )

    return response.data;

    // return findAllProducts();
  }
)

export const fetchProductsAsyncBuilder = (
  builder: ActionReducerMapBuilder<{
    data: Product[],
    status: string
  }>
) => {
  builder
    .addCase(fetchProductsAsync.pending, (state, _) => {
      state.status = STATUS.LOADING;
    })
    .addCase(fetchProductsAsync.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = STATUS.IDLE;
    })
    .addCase(fetchProductsAsync.rejected, (state, _) => {
      state.status = STATUS.ERROR;
    })
}