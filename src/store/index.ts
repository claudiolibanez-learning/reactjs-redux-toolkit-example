import { configureStore } from '@reduxjs/toolkit';

import { cartReducer } from './slices/cart';
import { productsReducer } from './slices/products';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  }
});

export { store };