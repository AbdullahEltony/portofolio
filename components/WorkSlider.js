// ** next image
import Image from "next/image";
// ** swiper react component
import { Swiper, SwiperSlide } from "swiper/react";

// ** swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// ** import required modules
import { Pagination } from "swiper";

// ** icons
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

// data
const workSlides = {
  slides: [
    {
      projects: [
        {
          path: "/projects/netflixo.webp",
          href:'https://netflixo.vercel.app/'
        },
        {
          path: "/projects/medical-system.webp",
          href:'https://netflixo.vercel.app/'
        },
        {
          path: "/thumb3.jpg",
          href:'https://netflixo.vercel.app/'
        },
        {
          path: "/thumb4.jpg",
          href:'https://netflixo.vercel.app/'
        },
      ],
    },
    {
      projects: [
        {
          path: "/projects/chat.webp",
          href:'https://netflixo.vercel.app/'
        },
        {
          path: "/thumb1.jpg",
          href:'https://netflixo.vercel.app/'
        },
        {
          path: "/thumb2.jpg",
          href:'https://netflixo.vercel.app/'
        },
        {
          path: "/thumb3.jpg",
          href:'https://netflixo.vercel.app/'
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.projects.map((project, index) => {
                return (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      {/*image*/}
                      <Image src={project.path} width={500} height={300} alt="" />
                      {/* overlay */}
                      <Link href={project.href} passHref >
                        <div
                          className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd]
                        opacity-0 group-hover:opacity-80 transition-all duration-700 flex justify-center"
                        >
                          {/* title */}
                          <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                            <div className="flex items-center gap-2 text-[13px] tracking-[0.2em]">
                              {/*title part 1*/}
                              <div className="delay-100">LIVE</div>
                              {/*title part 2*/}
                              <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                                PROJECT
                              </div>
                              {/*icon */}
                              <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                                <BsArrowRight />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
