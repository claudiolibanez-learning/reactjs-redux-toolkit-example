import { createSlice } from "@reduxjs/toolkit"

import { AppDispatch, AppThunk, RootState } from "../../types"

import { Product } from './types';

const STATUS = {
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
  reducers: {
    setProducts: (state, action) => {
      //
    },
    setStatus: (state, action) => {
      //
    }
  },
});

export const {
  setProducts,
  setStatus,
} = productsSlices.actions;

export const productsReducer = productsSlices.reducer;

export const productsSelector = (state: RootState) => state.products;

// Thunks

// export function fetchProducts() {
//   return async function fetchProductsThunk(dispatch: AppDispatch, _: any) {
//     dispatch(setStatus(STATUS.LOADING));

//     try {
//       const res = await fetch('http://localhost:3000/products');
//       const data = await res.json();

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

export const fetchProducts: AppThunk = async (dispatch) => {
  dispatch(setStatus(STATUS.LOADING));

  try {
    const res = await fetch('http://localhost:3000/products');
    const data = await res.json();

    dispatch(setProducts(data));
    dispatch(setStatus(STATUS.IDLE));
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      dispatch(setStatus(STATUS.ERROR));
    }
  }
}