import React from 'react';
import { mainCarouselData } from './MainCarouselData';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';





const MainCarousel = () => {
    const items= mainCarouselData.map((items)=><img className='curser-pointer' role='presentation' src={items.image} alt=''></img>)
    
    return(    
    <AliceCarousel
    items={items} 
    />
    )
};
export default MainCarousel;