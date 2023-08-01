import { configureStore } from '@reduxjs/toolkit';
import productReducer from './Reducer/ProductReducer';
import productsDetailsReducer from './Reducer/ProductDetailsReducer';
import cartReducer from "./Reducer/cartReducer"

export default configureStore({
  reducer: {
    products: productReducer,
    productData: productsDetailsReducer,
    cart: cartReducer,
  },
})