import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { CVPT } from '../assets/index'
import { CVENG } from '../assets/index'

const Hero = () => {
  return (
    <section style={{ width: "95%" }} className="relative w-5/6 sm:w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#66b2b2]" />
          <div className="w-1 sm:h-80 h-40 blue-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#66b2b2]">Miguel</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Software Developer
          </p>
          <div style={{ marginTop: 15 }} className="ctahero">
            <a href={CVPT} style={{ background: "#b2d8d8", color: "#004c4d", padding: 10, borderRadius: 5, marginRight: 10 }} download className='btn'>Download CV(PT)</a>
            <a href={CVENG} style={{ background: "#b2d8d8", color: "#004c4d", padding: 10, borderRadius: 5 }} download className='btn'>Download CV(ENG)</a>
          </div>
        </div>
      </div>
      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[40px] h-[70px] rounded-3xl border-4 border-white flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-4 h-4 rounded-full bg-white mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
