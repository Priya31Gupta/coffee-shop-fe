import axios from "axios"
export const CART_PRODUCT_DETAILS = 'CART_PRODUCT_DETAILS'
export const RECEIVE_CART_PRODUCTS_DETAILS_SUCCESS = 'RECEIVE_CART_PRODUCTS_DETAILS_SUCCESS'
export const RECEIVE_CART_PRODUCTS_DETAILS_FAILURE = 'RECEIVE_CART_PRODUCTS_DETAILS_FAILURE'
export const DELETE_CART_PRODUCT_DETAILS = 'DELETE_CART_PRODUCT_DETAILS'
export const DELETE_RECEIVE_CART_PRODUCTS_DETAILS_SUCCESS = 'DELETE_RECEIVE_CART_PRODUCTS_DETAILS_SUCCESS'
export const DELETE_RECEIVE_CART_PRODUCTS_DETAILS_FAILURE = 'DELETE_RECEIVE_CART_PRODUCTS_DETAILS_FAILURE'

export const getCARTFailure = () => ({ type: RECEIVE_CART_PRODUCTS_DETAILS_FAILURE });

export const getCartDetails = () => ({type: CART_PRODUCT_DETAILS});

export const getCartSuccess = (product) => ({
  type: RECEIVE_CART_PRODUCTS_DETAILS_SUCCESS,
  payload: product,
});

export const deleteCARTFailure = () => ({ type: DELETE_CART_PRODUCT_DETAILS });

export const deleteCartDetails = () => ({type: DELETE_RECEIVE_CART_PRODUCTS_DETAILS_FAILURE});

export const deleteCartSuccess = (product) => ({
  type: DELETE_RECEIVE_CART_PRODUCTS_DETAILS_SUCCESS,
  payload: product,
});

export const fetchCartData = (url) => {
  return async (dispatch) => {
    dispatch(getCartDetails(url));
    try {
        const response = await fetch(url);
        const data = await response.json();
        dispatch(getCartSuccess(data))
    } catch (error) {
        dispatch(getCARTFailure())
    }
  }
}
export const deleteProductFromCart = (url,id) => {
  return async (dispatch) => {
    dispatch(getCartDetails(url,id));
    try {
        const response = await axios.delete(`${url}/${id}`);
        const data = await response.json();
        dispatch(getCartSuccess(data))
    } catch (error) {
        dispatch(getCARTFailure())
    }
  }
}