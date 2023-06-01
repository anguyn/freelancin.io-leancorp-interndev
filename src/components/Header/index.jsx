import React, { useRef } from 'react';
import { Logo, Audience, Sales, Knowledge } from '../SVGs';
import { useInView } from 'framer-motion';
import Overlay from '../../assets/images/Home/Header/Overlay.png';
import EllipsedAvatar from '../../assets/images/Home/Header/EllipsedAvatar.png';

const Header = () => {
  const features = [
    {
      icon: <Audience className="w-20" />,
      title: 'Grow your audience',
      description: 'Find new customers and build your email list with lead generation ..',
    },
    {
      icon: <Sales className="w-20" />,
      title: 'Boost online sales',
      description: 'Market your ecommerce business and deliver experiences ..',
    },
    {
      icon: <Knowledge className="w-20" />,
      title: 'Sell your knowledge',
      description: 'Build a following, engage them with your content ..',
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <main className="mb-24">
      <div className="relative bg-heroBackground bg-no-repeat min-h-screen h-[840px] bg-cover">
        <img src={Overlay} className="w-[55%] absolute right-0 top-[80px]" alt="hero-overlay" />
        <article className="absolute top-1/4 left-[51.5%] -translate-x-1/2 -translate-y-1/4 ">
          <div className="relative shadow-md bg-white p-3 rounded">
            <p className="text-center text-greenText font-medium text-sm mb-4">
              Amanda M.
              <br /> is hired!
            </p>
            <div className="bg-milk p-4 rounded text-center text-sm ">
              <p className="text-lightGray">You Earned</p>
              <span className="text-2xl text-primary font-medium">$3,000</span>
            </div>
            <img
              src={EllipsedAvatar}
              className="absolute -right-6 -top-6 w-12 rounded-full border-4 border-white"
              alt="ellipsed-avatar"
            />
          </div>
        </article>
        <section className="max-w-maxWidth1 mx-auto -top-1/2 translate-y-1/2">
          <h1 className="text-6xl text-boldText font-bold leading-snug">
            Find & Hire Expert <br /> Freelancers
          </h1>
          <p className="text-lightText2 text-lg my-5">
            Work with the best freelance talent from around the
            <br />
            world on our secure flexible and cost-effective <br /> platform.
          </p>
          <div className="flex gap-5">
            <button className="bg-primary text-white font-[15px] text-center rounded-full py-3.5 px-10">
              Contact us
            </button>
            <button className="border border-primary text-primary font-[15px] text-center rounded-full py-3.5 px-10">
              Learn more
            </button>
          </div>
        </section>
      </div>
      <div
        ref={ref}
        style={{
          transform: isInView ? 'none' : 'translateX(-200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
        className="features flex flex-col md:grid md:grid-cols-3 md:gap-5 max-w-maxWidth1 mx-auto mt-32 px-4"
      >
        {features.map((item, index) => (
          <div key={index} className="flex flex-col justify-center items-center">
            {item.icon}
            <h5 className="mt-10 mb-5 text-2xl text-boldText">{item.title}</h5>
            <p className="text-center text-lg text-lightText max-w-[290px]">{item.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Header;
