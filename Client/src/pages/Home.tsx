// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required Swiper modules
import { Autoplay, Pagination } from 'swiper/modules';

import img1 from '../assets/heroImage/heroImg1.jpg'
import img2 from '../assets/heroImage/heroImg2.jpg'
import img3 from '../assets/heroImage/heroImg3.jpg'
import img4 from '../assets/heroImage/heroImg4.jpg'

const Home = () => {
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
        className="mySwiper">

        <SwiperSlide>
          <img src={img1} alt="dummy imgage" className='md:mt-2 bg-white container mx-auto w-full h-full min-h-24 bg-cover' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="dummy imgage" className='md:mt-2 bg-white container mx-auto w-full h-full min-h-24 bg-cover' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="dummy imgage" className='md:mt-2 bg-white container mx-auto w-full h-full min-h-24 bg-cover' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="dummy imgage" className='md:mt-2 bg-white container mx-auto w-full h-full min-h-24 bg-cover' />
        </SwiperSlide>
      </Swiper>
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

export default Home;
