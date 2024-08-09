// ** swiper react component
import {Swiper , SwiperSlide} from 'swiper/react'

// ** swiper styles
import 'swiper/css' 
import 'swiper/css/free-mode' 
import 'swiper/css/pagination' 

// icons
import {
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight
} from "react-icons/rx";

// ** import required modules
import {FreeMode , Pagination } from 'swiper';

// data
const serviceData = [
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Create interfaces that adapt seamlessly to different devices and screen sizes, ensuring a consistent and accessible user experience.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Develop structured, styled, and interactive web pages using fundamental web technologies.',
  },
  {
    icon: <RxReader />,
    title: 'SEO',
    description: 'Minimize and compress resources for faster load times, improving user experience and search engine rankings',
  },
];

const ServiceSlider = () => {
  return <Swiper breakpoints={{
    320:{
      slidesPerView:1,
      spaceBetween:15
    },
    640:{
      slidesPerView:3,
      spaceBetween:15
    },
  }}
  freeMode={true}
  pagination={{
    clickable:true
  }}
  modules={[FreeMode,Pagination]}
  className='h-[240px] sm:h-[340px]'
  >
    {
      serviceData.map((item,index)=>{
        return <SwiperSlide key={index}>
          <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
            {/*icon */}
            <div className='text-4xl text-accent mb-3'>{item.icon}</div>
            {/* title & desc */}
            <div className='mb-8'>
              <div className='mb-2 text-lg'>{item.title}</div>
              <p className='mx-w-[350px] leading-normal'>{item.description}</p>
            </div>
            {/* arrow */}
            <div className='text-3xl'>
              <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300'/>
            </div>
          </div>
        </SwiperSlide>
      })
    }
  </Swiper>;
};

export default ServiceSlider;
