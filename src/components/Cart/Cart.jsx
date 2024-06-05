import CardComponent from '../shared/Card';
import './cart.css';
import {fetchCartData, deleteProductFromCart} from '../../reduxComponent/Action/CartAction';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../shared/Loader';


function CartComponent(){
    const cart = useSelector((state) => state.cart.cartProducts);
    const {loading} = useSelector((state) => state.cart);
    const {hasError} = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleRemoveProductFromCart = (id) => {
        const url = 'https://coffee-shop-r4a2.onrender.com/cart'
        dispatch(deleteProductFromCart(url,id));
        setTimeout(() => {
            const userData = localStorage.getItem('user');
            if(userData && JSON.parse(userData))
            dispatch(fetchCartData(`https://coffee-shop-r4a2.onrender.com/cart/${JSON.parse(userData)._id}`));      
        }, 500);
        
    }

    useEffect(() => {
        const userData = localStorage.getItem('user');
        if(userData && JSON.parse(userData))
        dispatch(fetchCartData(`https://coffee-shop-r4a2.onrender.com/cart/${JSON.parse(userData)._id}`));      
    }, [dispatch])    

    if(loading){
        return <Loader />
    }

    if(hasError){
        return <p>Sorry Something went wrong...</p>
    }
    return (
        <>
             <div className='cart-product-container'>
                {
                    
                    cart && cart.length > 0 && cart.map(product => {return (
                        <div className="flexbox" key={product._id}>
                            <img className='cart-product-image' src={product.product[0].imageURL} alt={product.product[0].name} />
                            <div className="left-box">
                                <p className='title'> {product.product[0].name} </p>
                                <p className='price'> $ {product.product[0].price} </p>
                                <button className='remove-cart' onClick={() => handleRemoveProductFromCart(product._id)}> Remove from Cart </button>
                            </div>
                        </div> 
                    )}) 
                }
            </div> 
        </>
    )
}



export default CartComponent;