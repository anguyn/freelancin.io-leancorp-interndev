import React from 'react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const AgentItem = ({ image, info, style }) => {
  return (
    <motion.div
      variants={item}
      className={`p-8 bg-white rounded scale-75 sm:scale-100 w-11/12 md:w-[300px] lg:w-[362px] border border-[#F6FBFD] shadow-[0px_20px_50px_0px_#c6d9e14d] max-h-[435px] ${style}`}
    >
      <div className="flex justify-between">
        <Icon icon="iconoir:star" width="24" height="24" />
        <Icon icon="icon-park-outline:more-one" width="24" height="24" />
      </div>
      <div className="mt-4 flex flex-col justify-center items-center">
        <img
          src={image}
          className="w-32 h-32 object-cover rounded-full"
          alt={`Agent-${info.name}`}
        />
        <h3 className="mt-5 text-[#343951] text-[26px] font-medium">{info.name}</h3>
        <p className="mt-1.5 font-medium text-sm">{info.address}</p>
        <a className="mt-[50px] text-lg font-medium" href={`tel:${info.phone}`}>
          {info.phone}
        </a>
        <a
          className="text-lg text-primary font-medium mt-3.5 mb-[62px]"
          href={`mailto:${info.email}`}
        >
          {info.email}
        </a>
      </div>
    </motion.div>
  );
};

export default AgentItem;
