// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// Import required Swiper modules
import { Autoplay, Pagination } from 'swiper/modules';

import img1 from '../assets/heroImage/heroImg1.jpg'
import img2 from '../assets/heroImage/heroImg2.jpg'
import img3 from '../assets/heroImage/heroImg3.jpg'
import img4 from '../assets/heroImage/heroImg4.jpg'

import icon1 from '../assets/icons/1.png'
import icon2 from '../assets/icons/2.png'
import icon3 from '../assets/icons/3.png'
import icon4 from '../assets/icons/4.png'
import icon5 from '../assets/icons/5.png'
import icon6 from '../assets/icons/6.png'

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
                className="mySwiper w-full">

                <SwiperSlide>
                    <img src={img4} alt="dummy imgage" className='mt-1 bg-white w-full bg-cover' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="dummy imgage" className='mt-1 bg-white w-full bg-cover' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="dummy imgage" className='mt-1 bg-white w-full bg-cover' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img1} alt="dummy imgage" className='mt-1 bg-white w-full bg-cover' />
                </SwiperSlide>
            </Swiper>
            <div className='flex flex-wrap items-center justify-evenly gap-5 bg-blue-50 p-5 text-sm'>
                <div className='flex items-center gap-2'>
                    <img src={icon1} alt="icons" width={30} />
                    <p>Price Match Guarantee</p>
                </div>
                <div className='flex items-center gap-2'>
                    <img src={icon2} alt="icons" width={30} />
                    <p>30 Day Satisfaction</p>
                </div>
                <div className='flex items-center gap-2'>
                    <img src={icon3} alt="icons" width={30} />
                    <p>Widest Product Range</p>
                </div>
                <div className='flex items-center gap-2'>
                    <img src={icon4} alt="icons" width={30} />
                    <p>World Class Bike Fitting</p>
                </div>
                <div className='flex items-center gap-2'>
                    <img src={icon5} alt="icons" width={30} />
                    <p>Unbeatable Bike Finance</p>
                </div>
                <div className='flex items-center gap-2'>
                    <img src={icon6} alt="icons" width={30} />
                    <p>Best Trade-In Prices</p>
                </div>
            </div>
            {/* <div className="container mx-auto flex flex-col items-center">
        <div className="w-full overflow-clip rounded-lg"> */}

            {/* <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="container flex flex-col items-center px-[4rem] py-32 text-center lg:mx-auto lg:items-start lg:px-[4rem] lg:text-left">
              <p>New Release</p>
              <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
                Welcome to Our Website
              </h1>
              <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
                doloremque mollitia fugiat omnis! Porro facilis quo animi
                consequatur. Explicabo.
              </p>
              <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                <Button className="w-full sm:w-auto">
                  <ArrowRight className="mr-2 size-4" />
                  Primary
                </Button>
                <Button variant="outline" className="w-full sm:w-auto">
                  Secondary
                </Button>
              </div>
            </div>
            <img
              src="https://shadcnblocks.com/images/block/placeholder-1.svg"
              alt="placeholder hero"
              className="h-full w-full object-cover"
            />
          </div> */}
            {/* </div>
      </div> */}
        </section>
    );
};

export default Hero;
