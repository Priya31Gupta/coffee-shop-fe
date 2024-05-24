import axios from "axios";
export const ADD_TO_CART = 'ADD_TO_CART'
export const CHECKOUT_REQUEST = 'CHECKOUT_REQUEST'
export const CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS'
export const CHECKOUT_FAILURE = 'CHECKOUT_FAILURE'
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'
export const RECEIVE_PRODUCTS_SUCCESS = 'RECEIVE_PRODUCTS_SUCCESS'
export const RECEIVE_PRODUCTS_FAILURE = 'RECEIVE_PRODUCTS_FAILURE'
export const PRODUCT_DETAILS = 'PRODUCT_DETAILS'
export const RECEIVE_PRODUCTS_DETAILS_SUCCESS = 'RECEIVE_PRODUCTS_DETAILS_SUCCESS'
export const RECEIVE_PRODUCTS_DETAILS_FAILURE = 'RECEIVE_PRODUCTS_DETAILS_FAILURE'
export const RECEIVE_CART_SUCCESS = 'RECEIVE_CART_SUCCESS'
export const RECEIVE_CART_FAILURE = 'RECEIVE_CART_FAILURE'

export const getProducts = () => ({ type: RECEIVE_PRODUCTS })

export const getPostsSuccess = (products) => ({
  type: RECEIVE_PRODUCTS_SUCCESS,
  payload: products,
})

export const getPostsFailure = () => ({ type: RECEIVE_PRODUCTS_FAILURE });
export const getProductDetails = () => ({type: PRODUCT_DETAILS});

export const getProductDetailsSuccess = (product) => ({
  type: RECEIVE_PRODUCTS_DETAILS_SUCCESS,
  payload: product,
});

export const addedCartFailure = () => ({ type: RECEIVE_CART_FAILURE })
export const addedCartSuccess= (product) => ({ type: RECEIVE_CART_SUCCESS})
export const postCart = () => ({ type: ADD_TO_CART })

export const getProductDetailsFailure = () => ({type: RECEIVE_PRODUCTS_DETAILS_FAILURE});

export const fetchDataFromAPI = (url) => {
  return async (dispatch) => {
      dispatch(getProducts(url));
      try {
          const response = await fetch(url);
          const data = await response.json();
          dispatch(getPostsSuccess(data))
      } catch (error) {
          dispatch(getPostsFailure())
      }
    }
}

export const fetchProductDetailsAPI = (url) => {
  return async (dispatch) => {
    dispatch(getProductDetails(url));
    try {
        const response = await fetch(url);
        const data = await response.json();
        dispatch(getProductDetailsSuccess(data))
    } catch (error) {
        dispatch(getProductDetailsFailure())
    }
  }
}

export const addToCart = (url, body) => {
  return async (dispatch) => {
    dispatch(postCart(url, body));
    try {
        const response = await axios.post(url,body);
        const data = await response.json();
        dispatch(addedCartSuccess(data))
    } catch (error) {
        dispatch(addedCartFailure())
    }
  }
}

