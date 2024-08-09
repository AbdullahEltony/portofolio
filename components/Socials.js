// ** social icons 
import Link from 'next/link';
import {RiYoutubeLine ,
    RiLinkedinBoxLine ,
   RiFacebookBoxLine ,
   RiInstagramLine , 
   RiBehanceLine , 
   RiGithubLine
   } 
  from 'react-icons/ri'

const Socials = () => {
  return <div className='flex gap-x-5 items-center'>
    <Link href={'https://www.facebook.com/profile.php?id=61555356207357'} className='text-lg hover:text-accent transition-all duration-300'><RiFacebookBoxLine/></Link>
    <Link href={'https://www.linkedin.com/in/abdullah-mohamed-6158912a3/'} className='text-lg hover:text-accent transition-all duration-300'><RiLinkedinBoxLine/></Link>
    <Link href={'https://github.com/AbdullahEltony'} className='text-lg hover:text-accent transition-all duration-300'><RiGithubLine/></Link>
  </div>;
};

export default Socials;
