import React, { useState, useEffect } from 'react';
import { StackedCarousel, ResponsiveContainer } from 'react-stacked-center-carousel';
import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';
import Card from './Card';
import Customer1 from '../../assets/images/Home/Testimonial/Customer1.png';
import Customer2 from '../../assets/images/Home/Testimonial/Customer2.png';
import Customer3 from '../../assets/images/Home/Testimonial/Customer3.png';
import Customer4 from '../../assets/images/Home/Testimonial/Customer4.png';
import Customer5 from '../../assets/images/Home/Testimonial/Customer5.png';

const Pagination = ({ centerSlideDataIndex }) => {
  const { t } = useTranslation();

  const data = [
    {
      cover: Customer1,
      name: t('testimonial.customer1'),
      job: t('testimonial.job1'),
      feedback: t('testimonial.feedback1'),
    },
    {
      cover: Customer2,
      name: t('testimonial.customer2'),
      job: t('testimonial.job2'),
      feedback: t('testimonial.feedback3'),
    },
    {
      cover: Customer3,
      name: t('testimonial.customer3'),
      job: t('testimonial.job3'),
      feedback: t('testimonial.feedback3'),
    },
    {
      cover: Customer4,
      name: t('testimonial.customer4'),
      job: t('testimonial.job4'),
      feedback: t('testimonial.feedback4'),
    },
    {
      cover: Customer5,
      name: t('testimonial.customer5'),
      job: t('testimonial.job5'),
      feedback: t('testimonial.feedback5'),
    },
  ];

  return (
    <div className="flex justify-center gap-4 mt-14 my-10 lg:mt-28 lg:my-20">
      {data.map((_, index) => {
        const isCenterSlide = centerSlideDataIndex === index;
        return (
          <div
            key={index}
            className={`h-3 w-3 rounded-full ${isCenterSlide ? 'bg-primary' : 'bg-[#D3E5FF]'}`}
          />
        );
      })}
    </div>
  );
};

const Testimonial = (props) => {
  const [centerSlideDataIndex, setCenterSlideDataIndex] = useState(0);
  const ref = React.useRef();
  const { t } = useTranslation();

  const data = [
    {
      cover: Customer1,
      name: t('testimonial.customer1'),
      job: t('testimonial.job1'),
      feedback: t('testimonial.feedback1'),
    },
    {
      cover: Customer2,
      name: t('testimonial.customer2'),
      job: t('testimonial.job2'),
      feedback: t('testimonial.feedback3'),
    },
    {
      cover: Customer3,
      name: t('testimonial.customer3'),
      job: t('testimonial.job3'),
      feedback: t('testimonial.feedback3'),
    },
    {
      cover: Customer4,
      name: t('testimonial.customer4'),
      job: t('testimonial.job4'),
      feedback: t('testimonial.feedback4'),
    },
    {
      cover: Customer5,
      name: t('testimonial.customer5'),
      job: t('testimonial.job5'),
      feedback: t('testimonial.feedback5'),
    },
  ];

  const onCenterSlideDataIndexChange = (newIndex) => {
    setCenterSlideDataIndex(newIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      ref.current?.goNext();
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <>
      <h1 className="text-center text-4xl phone:text-5xl md:text-6xl font-semibold text-subTitle">
        {t('testimonial.title')}
      </h1>
      <h5 className="text-center text-lg mt-6 mb-10 md:mb-16 text-[#9598A0]">
        {t('testimonial.header')}
      </h5>
      <div className="relative w-full phone:py-10">
        <ResponsiveContainer
          carouselRef={ref}
          render={(parentWidth, carouselRef) => {
            let currentVisibleSlide = 5;
            if (parentWidth <= 1440) currentVisibleSlide = 3;
            if (parentWidth <= 1080) currentVisibleSlide = 1;
            return (
              <StackedCarousel
                ref={carouselRef}
                slideComponent={Card}
                slideWidth={parentWidth < 800 ? parentWidth - 40 : 750}
                carouselWidth={parentWidth}
                data={data}
                currentVisibleSlide={currentVisibleSlide}
                onActiveSlideChange={onCenterSlideDataIndexChange}
                maxVisibleSlide={5}
                fadeDistance={0.8}
                swipeThreshold={0}
                useGrabCursor
                className="!overflow-visible"
              />
            );
          }}
        />
        <>
          <div
            className="hidden md:block md:absolute top-[40%] left-[5%] lg:left-[10%] z-10 border rounded-full p-5 cursor-pointer transition-all duration-200 ease-linear hover:bg-[rgba(0,0,0,0.05)]"
            onClick={() => {
              ref.current?.goBack();
            }}
          >
            <Icon icon="fe:arrow-left" color="#5f5f5f" width="12" height="12" />
          </div>
          <div
            className="hidden md:block md:absolute top-[40%] right-[5%] lg:right-[10%] z-10 border rounded-full p-5 cursor-pointer transition-all duration-200 ease-linear hover:bg-[rgba(0,0,0,0.05)]"
            onClick={() => {
              ref.current?.goNext();
            }}
          >
            <Icon icon="fe:arrow-left" color="#5f5f5f" width="12" height="12" hFlip={true} />
          </div>
        </>
        <Pagination centerSlideDataIndex={centerSlideDataIndex} />
      </div>
    </>
  );
};

export default Testimonial;
