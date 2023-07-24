import {PRODUCT_DETAILS, RECEIVE_PRODUCTS_DETAILS_SUCCESS, RECEIVE_PRODUCTS_DETAILS_FAILURE} from '../Action';

export const ProductType = {
    _id: String(),
    imageURL: String(),
    name: String(),
    price: String(),
    description: String(),
    calorieCount: String(),
};

export const initialState = {
    loading: false,
    hasErrors: false,
    products: ProductType,
}

export default function productsDetailsReducer(state = initialState, action) {
    switch (action.type) {
      case PRODUCT_DETAILS:
        return { ...state, loading: true }
      case RECEIVE_PRODUCTS_DETAILS_SUCCESS:
        return { product_data: action.payload, loading: false, hasErrors: false }
      case RECEIVE_PRODUCTS_DETAILS_FAILURE:
        return { ...state, loading: false, hasErrors: true }
      default:
        return state
    }
  }