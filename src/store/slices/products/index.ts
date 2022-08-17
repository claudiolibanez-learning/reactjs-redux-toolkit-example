import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import { api } from "../../../services/api";
import { IResponseGetProducts } from "../../../services/types";

import { RootState } from "../../types"

import { Product } from './types';

export const STATUS = {
  IDLE: 'idle',
  LOADING: 'loading',
  ERROR: 'error'
}

const initialState = {
  data: [] as Product[],
  status: STATUS.IDLE,
}

const productsSlices = createSlice({
  name: '@products',
  initialState,

  // 1# REDUX-THUNK

  reducers: {
    // setProducts: (state, action) => {
    //   console.log('teste')

    //   state.data = action.payload;
    // },
    // setStatus: (state, action) => {
    //   state.status = action.payload;
    // }
  },

  // 2# REDUX-THUNK

  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUS.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUS.IDLE;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUS.ERROR;
      })
  },
});

export const {
  // 1# REDUX-THUNK

  // setProducts,
  // setStatus,

} = productsSlices.actions;

export const productsReducer = productsSlices.reducer;

export const productsSelector = (state: RootState) => state.products;

// Thunks

// 1# REDUX-THUNK

// export function fetchProducts() {
//   return async function fetchProductsThunk(dispatch: AppDispatch, _: any) {
//     dispatch(setStatus(STATUS.LOADING));

//     try {
//       1# API SERVICE

//       const res = await fetch('http://localhost:3000/products');
//       const data = await res.json() as Product[];

//       2# API SERVICE

//       const response = await api.get<IResponseGetProducts>('products');

//       const { data } = response;

//       dispatch(setProducts(data));
//       dispatch(setStatus(STATUS.IDLE));
//     } catch (error) {
//       if (error instanceof Error) {
//         console.log(error.message);
//         dispatch(setStatus(STATUS.ERROR));
//       }
//     }
//   }
// }

// 2# REDUX-THUNK

export const fetchProducts = createAsyncThunk(
  'products/fetch',
  async () => {

    // 1# API SERVICE

    // const res = await fetch('http://localhost:3000/products');
    // const data = await res.json() as Product[];

    // return data;

    // 2# API SERVICE

    const response = await api.get<IResponseGetProducts>('products');

    const { data } = response;

    return data;
  }
)