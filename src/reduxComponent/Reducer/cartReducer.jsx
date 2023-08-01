import {CART_PRODUCT_DETAILS,RECEIVE_CART_PRODUCTS_DETAILS_SUCCESS,RECEIVE_CART_PRODUCTS_DETAILS_FAILURE} from '../Action/CartAction';

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
    cartProducts: ProductType,
}

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
      case CART_PRODUCT_DETAILS:
        return { ...state, loading: true }
      case RECEIVE_CART_PRODUCTS_DETAILS_SUCCESS:
        return  { cartProducts: action.payload, loading: false, hasErrors: false, res: true }
      case RECEIVE_CART_PRODUCTS_DETAILS_FAILURE:
        return { ...state, loading: false, hasErrors: true }
      default:
        return state
    }
    
}
