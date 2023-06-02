import React from 'react';
import { Star, Website, Image, Analyze } from '../SVGs';
import ServicesItem from './ServicesItem';
import DotOverlay from '../../assets/images/Home/Services/DotOverlay.png';

const Services = () => {
  const services = [
    {
      icon: <Star className="w-20" />,
      title: 'Branding Idendity',
      description: 'Our support team will get assistance from AI-powered.',
    },
    {
      icon: <Website className="w-20" />,
      title: 'Branding consult',
      description: 'Our support team will get assistance from AI-powered.',
    },
    {
      icon: <Image className="w-20" />,
      title: 'web development',
      description: 'Our support team will get assistance from AI-powered.',
    },
    {
      icon: <Analyze className="w-20" />,
      title: 'market anlysis',
      description: 'Our support team will get assistance from AI-powered.',
    },
  ];

  return (
    <section className="m-auto max-w-maxWidth1 px-4 relative mb-[70px] md:mb-[150px]">
      <img
        src={DotOverlay}
        alt="Dot-Overlay1"
        className="absolute top-[170px] left-[-100px] -z-10"
      />
      <img
        src={DotOverlay}
        alt="Dot-Overlay2"
        className="absolute bottom-[-100px] right-0 md:right-[-100px] -z-10"
      />
      <h3 className="text-4xl phone:text-5xl md:text-6xl text-center mb-[30px] leading-normal font-semibold">
        Services
      </h3>
      <p className="text-sm md:text-lg text-center text-featureText">
        Our support team will get assistance from AI-powered suggestions, <br /> making it quicker
        than ever to handle support requests.
      </p>
      <div className="grid grid-cols-1 px-[10px] md:grid-cols-2 lg:grid-cols-3 gap-[20px] lg:gap-[40px] mt-[30px] md:mt-[76px] z-[1] bg-white">
        {services.slice(0, 2).map((feature, index) => {
          return (
            <div key={index}>
              <div className="flex px-[23px] py-[40px] rounded-[8px] border border-[rgba(239,239,239,.6)] shadow-[0px_30px_30px_0px_rgba(99,122,166,0.1)]">
                <ServicesItem
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </div>
              <div className="hidden md:hidden lg:block"></div>
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-1 px-[10px] md:grid-cols-2 lg:grid-cols-3 gap-[20px] lg:gap-[40px] mt-[20px] md:mt-[40px] lg:mt-[76px] z-[1] bg-white">
        <div className="hidden lg:block"></div>
        {services.slice(2, 4).map((feature, index) => {
          return (
            <div key={index}>
              <div className="flex px-[23px] py-[40px] rounded-[8px] border border-[rgba(239,239,239,.6)] shadow-[0px_30px_30px_0px_rgba(99,122,166,0.1)]">
                <ServicesItem
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
