import React from 'react';
import { Service, Clients, Consultation, Callback } from '../SVGs';
import { Link } from 'react-router-dom';

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
  return (
    <section className="m-auto max-w-[1200px] px-4 my-[70px] md:my-[150px]">
      <h3 className="text-4xl phone:text-5xl md:text-6xl text-center mb-[30px] leading-normal font-semibold">
        Our Features
      </h3>
      <p className="text-sm md:text-lg text-center text-featureText">
        Unleash your creativety with a visual collaboration <br /> plattorm that enables effective
        ideation
      </p>
      <div className="grid grid-cols-1 gap-[30px] md:grid md:grid-cols-2 lg:grid-cols-4 my-[25px] md:my-[50px] md:gap-[75px]">
        {features.map((feature, index) => {
          return (
            <div key={index} className="flex flex-col justify-center items-center">
              <p>{feature.icon}</p>
              <p className="mb-[15px] md:mb-[25px] mt-[20px] md:mt-[41px] font-semibold text-[22px]">
                {feature.title}
              </p>
              <p className="text-featureText text-center text-base">{feature.description}</p>
            </div>
          );
        })}
      </div>
      <Link to="/" className="flex justify-center text-primary">
        <span className="underline underline-offset-4 pr-[5px]">Learn more </span>
        &gt;
      </Link>
    </section>
  );
};

export default Features;
