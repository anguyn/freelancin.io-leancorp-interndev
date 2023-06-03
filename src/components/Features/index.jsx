import React, { useRef } from 'react';
import { Service, Clients, Consultation, Callback } from '../SVGs';
import { Link } from 'react-router-dom';
import { motion, animate, useInView } from 'framer-motion';

const variant1 = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const variant2 = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Features = () => {
  const features = [
    {
      icon: <Service className="w-20" />,
      title: 'Choosing a Service',
      description: 'Choosing an accountant that matches your needs',
    },
    {
      icon: <Clients className="w-20" />,
      title: 'Our Clients Say',
      description: 'Read the reviews from some of our satisfied clients',
    },
    {
      icon: <Consultation className="w-20" />,
      title: 'Initial Consultation',
      description: 'Understanding your accountancy requirements',
    },
    {
      icon: <Callback className="w-20" />,
      title: 'Request a Callback',
      description: 'Lets talk at a more convenient time for you',
    },
  ];

  const ref = useRef();
  const isInView = useInView(ref);

  return (
    <section className="m-auto max-w-[1200px] px-4 my-[70px] md:my-[150px]">
      <h3 className="text-4xl phone:text-5xl md:text-6xl text-center mb-[30px] leading-normal font-semibold">
        Our Features
      </h3>
      <p className="text-sm md:text-lg text-center text-featureText">
        Unleash your creativety with a visual collaboration <br /> plattorm that enables effective
        ideation
      </p>
      <motion.div
        ref={ref}
        className="grid grid-cols-1 gap-[30px] md:grid md:grid-cols-2 lg:grid-cols-4 my-[25px] md:my-[50px] md:gap-[75px]"
        variants={variant2}
        initial="closed"
        animate={isInView ? 'open' : 'closed'}
      >
        {features.map((feature, index) => {
          return (
            <motion.div
              key={index}
              className="flex flex-col justify-center items-center"
              variants={variant1}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <p>{feature.icon}</p>
              <p className="mb-[15px] md:mb-[25px] mt-[20px] md:mt-[41px] font-semibold text-[22px]">
                {feature.title}
              </p>
              <p className="text-featureText text-center text-base">{feature.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
      <Link to="/" className="flex justify-center text-primary">
        <span className="underline underline-offset-4 pr-[5px]">Learn more </span>
        &gt;
      </Link>
    </section>
  );
};

export default Features;
