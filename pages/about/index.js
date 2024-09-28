// ** components import
import Circles from "../../components/Circles";
import Avatar from "../../components/Avatar";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";

// hooks
import { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaSass,
  FaReact,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key={1} />,
          <FaCss3 key={2} />,
          <FaJs key={3} />,
          <FaReact key={4} />,
          <SiNextdotjs key={5} />,
          <SiFramer key={6} />,
          <FaSass key={7} />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          <FaFigma key={1} />,
          <SiAdobexd key={2} />,
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Intern - Gate",
        stage: "2023",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - Erasoft",
        stage: "2023",
      },
      {
        title: "Computer Science  - Fayoum University",
        stage: "2021 - present",
      },
      {
        title: "MERN Stack  - ITI Training",
        stage: "2024",
      },
    ],
  },
];

const About = () => {
  // ** states
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/*avatar img*/}
      <motion.dev
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.dev>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/*text*/}
        <div className="flex flex-1 flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 mt-9 md:mt-0"
          >
            Captivating <span className="text-accent">Store</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            I have hands-on experience with HTML, CSS, and JavaScript from my
            recent internship at gate. I contributed to building
            responsive web pages and worked on personal projects like a
            portfolio site and a weather app using React. Eager to grow my
            skills and contribute to web development.
          </motion.p>
          {/*counter*/}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/*experience*/}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              {/* <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={250} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied Clients
                </div>
              </div> */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={25} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finishing Projects
                </div>
              </div>
              {/* <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={8} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning awards
                </div>
              </div> */}
            </div>
          </motion.div>
        </div>

        {/*info*/}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize text-sm xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 z-30`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gay-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  <div className="font-light mb-2 md:mb-0 text-sm xl:text-lg">
                    {item.title}
                  </div>
                  <div className="hidden md:flex">-</div>
                  <div className="">{item.stage}</div>
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div key={itemIndex} className="text-2xl text-white">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
