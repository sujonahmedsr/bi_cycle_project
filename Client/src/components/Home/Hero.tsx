import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css'; // Import core Swiper styles
import "swiper/swiper-bundle.css";

// Import required Swiper modules
import { Autoplay, Pagination } from 'swiper/modules';

import img1 from '@/assets/heroImage/heroImg1.jpg'
import img2 from '@/assets/heroImage/heroImg2.jpg'
import img3 from '@/assets/heroImage/heroImg3.jpg'
import img4 from '@/assets/heroImage/heroImg4.jpg'

const Hero = () => {
    return (
        <section>
            <Swiper
                scrollbar={{
                    hide: true,
                }}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay, Pagination]}
                className="mySwiper w-full md:h-full h-[30vh]">

                <SwiperSlide>
                    <img src={img4} alt="dummy imgage" className='mt-1 bg-white w-full bg-cover h-full' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="dummy imgage" className='mt-1 bg-white w-full bg-cover h-full' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="dummy imgage" className='mt-1 bg-white w-full bg-cover h-full' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img1} alt="dummy imgage" className='mt-1 bg-white w-full bg-cover h-full' />
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Hero;
