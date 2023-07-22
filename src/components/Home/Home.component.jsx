import CardComponent from '../shared/Card';
import './home.css';
import { connect } from 'react-redux';
import { fetchDataFromAPI } from '../../reduxComponent/Action';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function HomeComponent(){
    const products = useSelector((state) => state.products);
    const loading = useSelector((state) => state.products.loading);
    const hasError = useSelector((state) => state.products.hasErrors);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchDataFromAPI('https://coffee-shop-r4a2.onrender.com/products?size=6'));        
    }, [dispatch])    

    if(loading){
        return <p>Loading posts...</p>
    }

    if(hasError){
        return <p>Sorry Something went wrong...</p>
    }
    return (
        <>
            <div>
                <img src='https://res.cloudinary.com/dtzzxe28w/image/upload/v1689970556/coffee-shop2_n81wgu.png' alt='banner' className='banner'/>
                <button className='overlay-btn'>Shop Coffee</button>
            </div>
            <p className='quick-quote'>Life begins after coffee</p>
            <div className='product-container'>
                {
                    products.products.length > 0 && products.products.map(product => {return (
                        
                        <CardComponent key={product._id} title={product.name} imgUrl={product.imageURL} calorieCount={product.calorieCount} price={product.price} />
                    )}) 
                }
            </div>
        </>
    )
}


const mapStateToProps = (state) => ({
    loading: state.loading,
    products: state.products,
    hasErrors: state.hasErrors,
})

export default connect(mapStateToProps)(HomeComponent);