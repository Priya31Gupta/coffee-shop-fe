import './card.css';
import { useNavigate } from 'react-router-dom';

function CardComponent({imgUrl, title, calorieCount, price, id}: {imgUrl: string,
    title: string,
    calorieCount: string,
    price : string,
    id: number,
    }){
    const navigate = useNavigate();

    const handleClick = (id: number) => {
        navigate(`/products/${id}`);
    }
    
    return (<>
            <div className='card' onClick={ () => handleClick(id) }>
                <img src={imgUrl} alt={title} height={200} width={200}/>
                <div className="flex">
                    <h3 className='title'> {title} </h3>
                    <p className='price'> ${price} </p>
                </div>
                <p className='caroiesCount'> {calorieCount} Calories </p>
            </div>
    </>)
}

export default CardComponent;
