import React, { useState, useRef, useEffect } from 'react';
import { Audience, Sales, Knowledge } from '../SVGs';
import { motion, useInView } from 'framer-motion';
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

  const toRotate = [
    'Find & Hire Expert Freelancers',
    'Or... ',
    'Want To Become A Freelance Partner For Us?',
    'Join FreeLancin.io Now!',
  ];

  const featureRef = useRef(null);
  const textRef = useRef(null);
  const isInView = useInView(featureRef);
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    let ticker = setInterval(() => {
      tick();
    }, 80);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  return (
    <main className="mb-24">
      <div className="relative flex flex-col md:flex-none bg-heroBackground bg-no-repeat min-h-screen h-[840px] bg-[center_top_0] md:bg-cover px-4">
        <img src={Overlay} className="w-[55%] absolute right-0 top-[80px]" alt="hero-overlay" />
        <article className="self-center md:self-auto mt-[80px] py-10 md:w-auto md:absolute md:top-1/4 md:right-0 lg:right-auto lg:left-[51.5%] md:-translate-x-1/2 md:-translate-y-1/4">
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
        <section className="max-w-maxWidth1 md:w-[700px] xl:w-[1232px] mx-auto phone:mx-0 self-center md:relative lg:static md:top-1/2 lg:top-auto md:-translate-y-1/2 lg:translate-y-1/2">
          <div className="flex relative mt-2 my-8">
            <h1 className="text-4xl md:max-w-[600px] phone:text-5xl text-center md:text-left md:leading-slug lg:text-6xl lg:leading-slug text-boldText font-bold">
              {text}
            </h1>
            <div className="ml-2 w-px h-16 self-center rounded-full dark:bg-white bg-slate-900 opacity-1 transition-opacity animate-blink"></div>
          </div>
          <motion.p
            ref={textRef}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', bounce: 0.45 }}
            className="text-lightText2 text-base text-center md:text-left md:text-lg my-5"
          >
            Work with the best freelance talent from around the
            <br className="hidden phone:block" />
            world on our secure flexible and cost-effective <br className="hidden phone:block" />{' '}
            platform.
          </motion.p>
          <div className="flex justify-center md:justify-start gap-5">
            <button className="bg-primary text-white text-[15px] text-center rounded-full py-3.5 px-10">
              Contact us
            </button>
            <button className="border border-primary text-primary text-[15px] text-center rounded-full py-3.5 px-10">
              Learn more
            </button>
          </div>
        </section>
      </div>
      <motion.div
        ref={featureRef}
        style={{
          transform: isInView ? 'none' : 'translateX(-200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
        className="features flex flex-col gap-5 md:grid md:grid-cols-3 md:gap-5 max-w-maxWidth1 mx-auto mt-6 phone:mt-12 md:mt-32 px-4"
      >
        {features.map((item, index) => (
          <div key={index} className="flex flex-col justify-center items-center">
            {item.icon}
            <h5 className="my-4 phone:mt-10 phone:mb-5 text-xl phone:text-2xl text-boldText">
              {item.title}
            </h5>
            <p className="text-center text-normal phone:text-lg text-lightText max-w-[290px]">
              {item.description}
            </p>
          </div>
        ))}
      </motion.div>
    </main>
  );
};

export default Header;
