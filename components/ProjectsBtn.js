// ** next import 
import Link from "next/link";

// image 
import Image from "next/image";

// ** icons
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return <div className="mx-auto xl:mx-0 z-[5]">
   <Link href='/work' className="relative w-[140px] h-[140px] md:w-[185px] md:h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-no-repeat group">
    <Image
    src='/rounded-text.png'
    alt=''
    width={141}
    height={148}
    className="animate-spin-slow w-full h-full max-w-[105px] max-h-[112px] md:max-w-[141px] md:max-h-[148px]"
    />
    <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300"/>
   </Link>
  </div>;
};

export default ProjectsBtn;
