
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { PARTICLES_BACKGROUND_OPTIONS } from "../model/constants";
import { FC, memo, ReactNode } from "react";
import { motion } from 'motion/react'

const StarBackground: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className='fixed left-0 top-0 w-full h-full z-0'>
              <Particles
                  id="tsparticles"
                  init={async (engine: Engine) => await loadSlim(engine)}
                  loaded={async (container: Container | undefined) => console.log(container)}
                  // @ts-ignore lol
                  options={PARTICLES_BACKGROUND_OPTIONS}
              />
        </motion.div>
        <div className='relative z-1'>
            {children}
        </div>
    </>
  );
};

export default memo(StarBackground);