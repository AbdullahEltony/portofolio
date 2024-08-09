
// ** framer mothion
import { animate, motion } from "framer-motion";

// ** vairants
const transitionVairants = {
  initial :{
    x:'100%',
    width:'100%'
  },
  animate:{
    x:'0%',
    width:'0%'
  },
  exit : {
    x:['0%','100%'],
    width:['0%','100%']
  }
}
const Transition = () => {
  return (
    <>
      <motion.dev className='fixed top-0 bottom-0 right-full h-screen w-screen z-30 bg-[#2e2257]'
        variants={transitionVairants}
        initial='initial'
        animate='animate'
        exit='exite'
        transition={{delay:0.2 ,duration:0.6, ease:'easeInOut'}}
        >
        </motion.dev>
      <motion.dev className='fixed top-0 bottom-0 right-full h-screen w-screen z-20 bg-[#3b2d71]'
        variants={transitionVairants}
        initial='initial'
        animate='animate'
        exit='exite'
        transition={{delay:0.4,duration:0.6, ease:'easeInOut'}}
        >
        </motion.dev>
      <motion.dev className='fixed top-0 bottom-0 right-full h-screen w-screen z-10 bg-[#4b3792]'
        variants={transitionVairants}
        initial='initial'
        animate='animate'
        exit='exite'
        transition={{delay:0.6,duration:0.6, ease:'easeInOut'}}
        >
        </motion.dev>
    </>
  );
};

export default Transition;
