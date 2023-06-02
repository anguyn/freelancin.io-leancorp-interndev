import React, { useRef, useEffect } from 'react';
import { motion, animate, useInView } from 'framer-motion';

const Counter = ({ from, to, styles }) => {
  const nodeRef = useRef();
  const isInView = useInView(nodeRef);

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 10,
      onUpdate(value) {
        node.textContent = value.toFixed() + '%';
      },
    });

    return () => controls.stop();
  }, [from, to, isInView]);

  return <p className={styles} ref={nodeRef} />;
};

const Jouney = () => {
  return (
    <section className="m-auto max-w-maxWidth1 px-4">
      <motion.div
        className="relative bg-primary rounded-[20px] text-white font-semibold px-12 md:px-[122px] py-16 md:py-[96px] after:absolute after:w-full after:h-[102%] after:contents-[''] after:bg-[radial-gradient(35.21%_1184.28%_at_47.25%_56.96%,#752F90_0%,#502F90_0.01%,#FFFFFF_100%)] after:opacity-[5%] after:-z-[1] z-0 after:top-36 after:-left-16 after:-rotate-45 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.2 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        <h3 className="text-center text-4xl phone:text-5xl font-semibold md:text-6xl mb-[73px] leading-normal">
          Journey of our Success
        </h3>
        <div className="flex flex-col items-center gap-10 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-[110px] font-semibold leading-none">
          <div className="flex flex-col md:block md:w-auto self-start md:self-auto ">
            <Counter from={0} to={85} styles="md:text-[70px] text-6xl" />
            <div className="w-[40%] h-[5px] bg-white my-[5px]"></div>
            <p className="text-xl mt-2 phone:mt-auto font-normal leading-normal">
              manage <br /> communication more efficiently
            </p>
          </div>
          <div className="w-[350px] flex flex-col md:block md:w-auto self-center md:self-auto text-center md:text-start">
            <Counter from={0} to={95} styles="md:text-[70px] text-6xl" />
            <div className="w-[40%] self-center md:self-auto h-[5px] bg-white my-[5px]"></div>
            <p className="text-xl mt-2 phone:mt-auto font-normal leading-normal">
              improve communication with customers and <br /> clients
            </p>
          </div>
          <div className="w-[350px] flex flex-col md:block md:w-auto self-end md:self-auto text-right md:text-start">
            <Counter from={0} to={75} styles="md:text-[70px] text-6xl" />
            <div className="w-[40%] self-end md:self-auto h-[5px] bg-white my-[5px]"></div>
            <p className="text-xl mt-2 phone:mt-auto font-normal leading-normal">
              average improvement <br /> in team efficiency
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Jouney;
