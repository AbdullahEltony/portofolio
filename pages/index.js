// ** framer mothion
import { motion } from "framer-motion";

// ** components
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import { fadeIn } from "../variants";
const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center xl:text-left flex flex-col justify-center xl:pt-40 mx-auto h-full container">
          <motion.h1
            className="h1 mt-10 md:mt-0"
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Transfrom Ideas <br /> into{" "}
            <span className="text-accent">Digital Reality</span>
          </motion.h1>
          <motion.p
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            I am Abdullah, a Hardworking and passionate job seeker with strong
            organizational skills eager to secure entry-level front end
            position. Ready to help team achieve company goals.
          </motion.p>
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        <motion.div
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:right-0"
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
