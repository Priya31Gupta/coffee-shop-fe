import CardComponent from '../shared/Card';
import './home.css';
import { connect } from 'react-redux';
import { fetchDataFromAPI, getCartProduct } from '../../reduxComponent/Action/Action';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../shared/Loader';
import { useNavigate } from 'react-router-dom';

function HomeComponent(){
    const products = useSelector((state) => state.products);
    const loading = useSelector((state) => state.products.loading);
    const hasError = useSelector((state) => state.products.hasErrors);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const text = 'Life begins after coffee';

    useEffect(() => {
        dispatch(fetchDataFromAPI('https://coffee-shop-r4a2.onrender.com/products?size=6'));   
    }, [dispatch])    

    if(loading){
        return <Loader />
    }

    if(hasError){
        return <p>Sorry Something went wrong...</p>
    }
    return (
        <>
            <div>
                <img src='https://res.cloudinary.com/dtzzxe28w/image/upload/v1689970556/coffee-shop2_n81wgu.png' alt='banner' className='banner'/>
                <button className='overlay-btn' onClick={()=>{navigate('/products');}}>Shop Coffee</button>
            </div>
            <p className='quick-quote'>
                {text.split('').map((char, index) => {
                   return char === ' ' ? <span key={index} className="animated-space">&nbsp;</span> : <span key={index} className="animated-letter" style={{ '--index': index }}>{char}</span>;
                })}
            </p>
            <div className='product-container'>
                {
                    products && products.products &&products.products.length > 0 && products.products.map(product => {return (
                        <CardComponent key={product._id} title={product.name} imgUrl={product.imageURL} calorieCount={product.calorieCount} price={product.price} id={product._id} />
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
