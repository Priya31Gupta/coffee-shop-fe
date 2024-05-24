import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';
import './carousel.css';
const TechCarousel = ({imageList}) => {
    const options = {
        type         : 'loop',
        gap          : '1rem',
        autoplay     : true,
        pauseOnHover : true,
        resetProgress: false,
        height       : '1rem',
        focus       : 'center',
        cover       : true,
        loop        : true,
    };
    return (
        <Splide> 
            {
                imageList.length > 0 && imageList.map((imgUrl,index) =>
                 <SplideSlide options={ options } key={index}>
                    <img src={imgUrl} alt={index}/>
                  </SplideSlide>)
            }
        </Splide>
    )
}

export default TechCarousel;
