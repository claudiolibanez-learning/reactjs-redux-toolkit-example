import { createSlice } from '@reduxjs/toolkit';
import produce from 'immer';

import { RootState } from '../../types';

import { Cart } from './types';

const initialState = [] as Cart[];

const cartSlice = createSlice({
  name: '@cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      //
    },
    removeFromCart: (state, action) => {
      //
    },
    cleanCart: (state) => {
      state = produce<Cart[]>(initialState, (draft) => {
        draft = initialState
      });
    }
  }
});

export const {
  addToCart,
  removeFromCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

export const cartSelector = (state: RootState) => state.cart;

