import CardComponent from '../shared/Card';
import './home.css';
function HomeComponent(){


    return (
        <>
            <div>
                <img src='https://res.cloudinary.com/dtzzxe28w/image/upload/v1689970556/coffee-shop2_n81wgu.png' alt='banner-image' className='banner'/>
                <button className='overlay-btn'>Shop Coffee</button>
            </div>
            <p className='quick-quote'>Life begins after coffee</p>

            <CardComponent title='hello' imgUrl='https://res.cloudinary.com/dtzzxe28w/image/upload/v1689877180/coffee-shop/Affogato_okslhx.png' calorieCount='120' price='20'/>
        </>
    )
}

export default HomeComponent;