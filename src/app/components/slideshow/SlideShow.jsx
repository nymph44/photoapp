'use client'
import React, { useRef, useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';


const SlideShow = ({ images }) => {
    const swiperContainerRef = useRef(null);

    useEffect(() => {
        if (swiperContainerRef.current) {
            const swiper = new Swiper(swiperContainerRef.current, {
                slidesPerView: 5, // Set the number of slides to show at a time
                spaceBetween: 16, // Adjust the spacing between slides as needed
                grabCursor: true,
                centeredSlides: true,
            });

            return () => {
                // Cleanup Swiper instance when component is unmounted
                swiper.destroy();
            };
        }
    }, []);

    return (
        <div className="swiper-container" ref={swiperContainerRef}>
           
            <div className="swiper-wrapper bg-black p-8 h-full w-full">
                
                {images.map((image, index) => (
                    <div key={index} className="swiper-slide w-32">
                         <div className="flex justify-between ">
                         {
  Array.from({ length: 7 }).map((_, index) => (
    <div key={index} className='bg-white rounded-sm'></div>
  ))
}
                            
                        </div>
                        <img
                            src={image}
                            alt={`Slide ${index}`}
                            className="w-full h-full object-cover rounded-md"
                        />
                        {/* <div className="flex justify-between ">
                            <div className='bg-white rounded-sm'>' ' '</div>
                            <div className='bg-white rounded-sm'>' ' '</div>
                            <div className='bg-white rounded-sm'>' ' '</div>
                            <div className='bg-white rounded-sm'>' ' '</div>
                            <div className='bg-white rounded-sm'>' ' '</div>
                            <div className='bg-white rounded-sm'>' ' '</div>
                            <div className='bg-white rounded-sm'>' ' '</div>
     
                        </div> */}
                    </div>
                ))}
            </div>
            <div className="swiper-pagination"></div>
        </div>
    );
};

export default SlideShow;
