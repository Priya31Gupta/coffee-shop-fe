import {RECEIVE_PRODUCTS,RECEIVE_PRODUCTS_SUCCESS,RECEIVE_PRODUCTS_FAILURE} from '../Action'

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

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return { ...state, loading: true }
    case RECEIVE_PRODUCTS_SUCCESS:
      console.log(state,"state",action.payload)
      return { products: action.payload, loading: false, hasErrors: false }
    case RECEIVE_PRODUCTS_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}