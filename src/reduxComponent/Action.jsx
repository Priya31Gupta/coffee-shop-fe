export const ADD_TO_CART = 'ADD_TO_CART'
export const CHECKOUT_REQUEST = 'CHECKOUT_REQUEST'
export const CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS'
export const CHECKOUT_FAILURE = 'CHECKOUT_FAILURE'
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'
export const RECEIVE_PRODUCTS_SUCCESS = 'RECEIVE_PRODUCTS_SUCCESS'
export const RECEIVE_PRODUCTS_FAILURE = 'RECEIVE_PRODUCTS_FAILURE'

export const getProducts = (url) => ({ type: RECEIVE_PRODUCTS })

export const getPostsSuccess = (products) => ({
  type: RECEIVE_PRODUCTS_SUCCESS,
  payload: products,
})
export const getPostsFailure = () => ({ type: RECEIVE_PRODUCTS_FAILURE })

export const fetchDataFromAPI = (url) => {
  return async (dispatch) => {
        dispatch(getProducts(url));
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data,"data")
            dispatch(getPostsSuccess(data.product))
        } catch (error) {
            dispatch(getPostsFailure())
        }
    }
}
