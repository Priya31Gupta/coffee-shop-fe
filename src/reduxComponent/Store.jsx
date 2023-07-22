import { configureStore } from '@reduxjs/toolkit';
import productReducer from './Reducer/ProductReducer';

export default configureStore({
  reducer: {
    products: productReducer,
  },
})