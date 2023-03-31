import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

import { Tooltip } from 'react-tooltip'

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10' >
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name} data-tooltip-id={technology.name} data-tooltip-content={technology.name}>
          <BallCanvas icon={technology.icon} />
          <Tooltip id={technology.name} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
