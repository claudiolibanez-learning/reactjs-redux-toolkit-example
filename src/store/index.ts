import { configureStore } from '@reduxjs/toolkit';

import { cartReducer } from './features/cart';
import { productsReducer } from './features/products';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  }
});

export { store };