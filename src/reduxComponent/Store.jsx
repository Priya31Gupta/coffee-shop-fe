import { configureStore } from '@reduxjs/toolkit';
import productReducer from './Reducer/ProductReducer';
import productsDetailsReducer from './Reducer/ProductDetailsReducer';

export default configureStore({
  reducer: {
    products: productReducer,
    productData: productsDetailsReducer,
  },
})