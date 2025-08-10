import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


const Banner = () => {
    return (
        <div className=''>
            
            
            <div className=''>
            <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide className='text-white '>
        
              
            <img className='h-[70vh] relative ' src="/slider1.jpg" alt="" style={{width:"100%"}} />
            <div class="absolute inset-0 bg-[linear-gradient(rgba(20,20,20,0.4),rgba(20,20,20,0.4))]"></div>
        <h1 className='text-white text-6xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>Stay Fresh, Stay Ahead</h1>

      
      
        
        </SwiperSlide>
      <SwiperSlide className='text-white'>
        <img className='h-[70vh] relative ' src="/slider2.jpg" alt="" style={{width:"100%"}}/>
        <div class="absolute inset-0 bg-[linear-gradient(rgba(20,20,20,0.4),rgba(20,20,20,0.4))]"></div>
        <h1 className='text-white text-6xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center '>Track Smart. Waste Less</h1>

        

        </SwiperSlide>
      <SwiperSlide className='text-white'>
        <img className='h-[70vh] relative ' src="/slider3.jpg" alt="" style={{width:"100%"}}/>
        <div class="absolute inset-0 bg-[linear-gradient(rgba(20,20,20,0.4),rgba(20,20,20,0.4))]"></div>
         <h1 className='text-white text-6xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>Know What's in Your Fridge - Before It's Too Late.</h1>
        
        </SwiperSlide>
      
      ...
    </Swiper>

            </div>
     
            
        </div>
    );
};

export default Banner;