
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { PARTICLES_BACKGROUND_OPTIONS } from "../model/constants";
import { FC, memo, ReactNode } from "react";

const StarBackground: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
        <div className='fixed left-0 top-0 w-full h-full z-0'>
        <Particles
            id="tsparticles"
            init={async (engine: Engine) => await loadSlim(engine)}
            loaded={async (container: Container | undefined) => console.log(container)}
            // @ts-ignore lol
            options={PARTICLES_BACKGROUND_OPTIONS}
        />
        </div>
        <div className='relative z-1'>
            {children}
        </div>
    </>
  );
};

export default memo(StarBackground);