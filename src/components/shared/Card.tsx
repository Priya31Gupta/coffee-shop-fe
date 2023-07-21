import './card.css';

function CardComponent({imgUrl, title, calorieCount, price}: {imgUrl: string,
    title: string,
    calorieCount: string,
    price : string}){

    return (<>
            <div className='card'>
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