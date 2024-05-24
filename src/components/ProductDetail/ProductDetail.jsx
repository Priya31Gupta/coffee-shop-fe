import { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {fetchProductDetailsAPI, addToCart} from '../../reduxComponent/Action/Action';
import './product-detail.css';
import StarIcon from '@mui/icons-material/Star';
import ProgressBar from "@ramonak/react-progress-bar";
import Loader from "../shared/Loader";
import { CartContext } from "../../reduxComponent/cartContext";


function ProductDetail(){
    const {id} = useParams();
    const product = useSelector((state) => state.productData.product_data);
    const loading = useSelector((state) => state.productData.loading);
    const hasError = useSelector((state) => state.productData.hasErrors);
    const dispatch = useDispatch();
    const { handleAddToCart } = useContext(CartContext);

    const handleAddToCartProduct = () => {
        const payload = {
            product: [id],
            user_id: '64b96d78e026ef1234d4c59f'
        }
        const url = 'https://coffee-shop-r4a2.onrender.com/cart/'
        handleAddToCart(url,payload)
    }    
    
    useEffect(() => {
        dispatch(fetchProductDetailsAPI(`https://coffee-shop-r4a2.onrender.com/products/${id}`));    
    }, [dispatch])

    if(loading){
        return <Loader />
    }
    if(hasError){
        return <div>Error</div>
    }

    return (
        <>
            {product && <div className="productDetails">
                <div className="cont">
                    <div className="box">
                        <img src={product.product.imageURL} alt="product image" className="product-image"/>
                    </div>
                    <div className="box">
                        <h2 className="title"> {product.product.name} </h2>
                        <div className="flex">
                        {product.avgRating && <div className="badge">
                                {product.avgRating}&#12644;<StarIcon />&#12644;
                            </div>}
                            <p className="review-text"> {product.review.length} Reviews </p>
                        </div>
                        <div className="price mt-1">
                            ${parseFloat(product.product.price).toFixed(2)}
                        </div>
                        <div className="description mt-1">
                            {product.product.description}
                        </div>
                        <span className=" description flex mt-1">
                            CalorieCount : &#12644; <span className="badge badge-calorie">{product.product.calorieCount}</span> 
                        </span>
                        <div className="btn-cont">
                            <button className="cart-btn" onClick={handleAddToCartProduct}> Add To Cart</button>
                        </div>
                    </div>
                </div>
                <div className="review-cont">
                    {
                        product?.review && product?.review.length > 0 ? 
                        <div>
                            <div className="review-header-box">
                                <div>
                                    <h3>Ratings & Reviews</h3>
                                    <p className="product-rating">{product.avgRating}<StarIcon /> &#12644; <ProgressBar className="progressbar" completed = {(100 * product.avgRating) / 5} bgColor = "#96767A" isLabelVisible = {false} /></p> 
                                    <p className="review-text"> {product.review.length} Reviews </p>
                                </div>
                                <div className="pull-right">
                                    <button>Add Review</button>
                                </div>
                            </div>
                            {
                                product?.review.map(
                                    review => <div className="review-box" key={review._id}>
                                        <div className="header">
                                            <div className="badge"> {review.rating}<StarIcon /></div>&#12644;
                                            <div className="name"> {review.user_id.name} </div>
                                        </div>
                                        <div className="review">
                                            {review.review}
                                        </div>
                                    </div>
                                )
                            }
                            
                        </div> 
                        :
                        <div>
                            <h3>Ratings & Reviews</h3>
                            No reviews yet! Be the first to write a review...
                        </div>
                    }
                </div>
            </div> }
        </>
    )
}

export default ProductDetail;
