import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/Cart/cartSlice';
import productReducer from '../pages/productSlice';

const rootReducer = {
  cartReducer,
  productReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
