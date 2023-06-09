import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import AgentItem from './AgentItem';
import Agent1 from '../../assets/images/Home/Agents/Agent1.png';
import Agent2 from '../../assets/images/Home/Agents/Agent2.png';
import Agent3 from '../../assets/images/Home/Agents/Agent3.png';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const Agents = () => {
  const { t } = useTranslation();

  const agentItems = [
    {
      id: 1,
      image: Agent1,
      info: {
        name: 'Alison Kiara',
        address: 'Michigan, TX',
        phone: '989-653-2986',
        email: 'alisonkiara@hommy.com',
      },
      class: '',
    },
    {
      id: 2,
      image: Agent2,
      info: {
        name: 'Dianne Sabin',
        address: 'New Jeresy, TX',
        phone: '989-653-2550',
        email: 'hidianne@hommy.com',
      },
      class: 'mt-0 md:mt-[60px]',
    },
    {
      id: 3,
      image: Agent3,
      info: {
        name: 'Shawn Ramirez',
        address: 'Illinois, NZ',
        phone: '989-653-2986',
        email: 'iamrami@hommy.com',
      },
      class: 'mt-0 md:mt-[120px]',
    },
  ];

  return (
    <section className="relative flex flex-col items-center p-4 lg:p-24 z-0 bg-gradient-to-b from-[rgba(246,251,253,1)] to-[rgba(244,248,253,0)] after:absolute after:contents-[''] after:bg-dotOverlay after:bg-no-repeat after:bg-[length:200px_200px] sm:after:bg-[length:269px_269px] sm:after:opacity-60 after:bg-right-top after:w-full after:h-full after:right-0 after:top-10 after:-z-[1]">
      <h1 className="text-center text-4xl phone:text-5xl md:text-6xl font-semibold text-subTitle mb-8">
        {t('agents.title')}
      </h1>
      <h6 className="text-center text-xl text-[#343951]">{t('agents.header')}</h6>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center md:grid md:grid-cols-3 max-w-maxWidth1 gap-5 py-10 mb-[50px] sm:mb-[150px]"
      >
        {agentItems.map((item, index) => (
          <AgentItem key={index} image={item.image} info={item.info} style={item.class} />
        ))}
      </motion.div>
    </section>
  );
};

export default Agents;
