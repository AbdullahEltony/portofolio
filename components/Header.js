import Link from "next/link";

// ** components imports
import Socials from '../components/Socials'

// ** Image import 
import Image from "next/image";
const Header = () => {
  return <header className="absolute w-full z-30 flex items-center px-16 xl:px-0 xl:h-[90px]">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row py-8 gap-y-[0.5rem] justify-between items-center">
        <Link href='/'>
          <h2 className="text-[23px] lg:text-[26px] font-extrabold tracking-wider">abdullah <span className="text-[#f9f7f7ed] font-light">eltony</span><span className="text-accent">.</span></h2>
        </Link>
        <div>
        <Socials/>
      </div>
      </div>
    </div>
  </header>
};

export default Header;
