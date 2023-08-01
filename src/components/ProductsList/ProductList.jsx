import { fetchDataFromAPI } from '../../reduxComponent/Action/Action';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardComponent from '../shared/Card';
import './product-list.css'
import Loader from '../shared/Loader';

function ProductList(){
    const products = useSelector((state) => state.products.products);
    const loading = useSelector((state) => state.products.loading);
    const hasError = useSelector((state) => state.products.hasErrors);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDataFromAPI('https://coffee-shop-r4a2.onrender.com/products'));       
    }, [dispatch])  

    if(loading) return <Loader />
    if(hasError) return <div>Oops! Something went wrong...</div>
    return(
        <>
            
            <div className="ProductList">
                {
                    products && products.length > 0 && products.map(product => <CardComponent key={product._id} title={product.name} imgUrl={product.imageURL} calorieCount={product.calorieCount} price={product.price} id={product._id} /> )
                }
            </div>
        </>
    )
}

export default ProductList;