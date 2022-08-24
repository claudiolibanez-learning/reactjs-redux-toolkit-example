import { createSlice } from "@reduxjs/toolkit"

import { RootState } from "../../@types"

import { initialState } from "./initialState";

import { fetchProductsAsyncBuilder } from "./thunks/fetchProductsAsync";

const productsSlices = createSlice({
  name: '@products',
  initialState,
  reducers: {
    //
  },
  extraReducers(builder) {
    fetchProductsAsyncBuilder(builder);
  },
});

export const {
  //
} = productsSlices.actions;

export const productsReducer = productsSlices.reducer;

export const productsSelector = (state: RootState) => state.products;
