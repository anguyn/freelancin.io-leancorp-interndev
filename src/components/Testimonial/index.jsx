import React, { useState, useEffect } from 'react';
import { StackedCarousel, ResponsiveContainer } from 'react-stacked-center-carousel';
import { Icon } from '@iconify/react';
import Card from './Card';
import Customer1 from '../../assets/images/Home/Testimonial/Customer1.png';
import Customer2 from '../../assets/images/Home/Testimonial/Customer2.png';
import Customer3 from '../../assets/images/Home/Testimonial/Customer3.png';
import Customer4 from '../../assets/images/Home/Testimonial/Customer4.png';
import Customer5 from '../../assets/images/Home/Testimonial/Customer5.png';

const data = [
  {
    cover: Customer1,
    name: 'Stephan Louis',
    job: 'Developer',
    feedback:
      'Lorem ipsum dolor sit amet, consectet adip incididunt ut labore et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit am et dolor. Lorem dolor sit am ',
  },
  {
    cover: Customer2,
    name: 'Jeff Smith',
    job: 'Digital Artist',
    feedback:
      'Lorem ipsum dolor sit am, consectetur adipis occ tempor inv sapient et non pro id el component lobortis et inter lobortis et inter lob Architect et inter lobortis ',
  },
  {
    cover: Customer3,
    name: 'Adam Pritchard',
    job: 'Journalist',
    feedback:
      'Lorem ipsum dolor sit amet, consectet adip incididunt ut labore et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit am et dolor. Lorem dolor sit am ',
  },
  {
    cover: Customer4,
    name: 'Christopher Green',
    job: 'Interpreter',
    feedback:
      'Lorem ipsum dolor sit amet, consectet adip incididunt ut labore et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit am et dolor. Lorem dolor sit am ',
  },
  {
    cover: Customer5,
    name: 'Kate Denson',
    job: 'Developer',
    feedback:
      'Lorem ipsum dolor sit amet, consectet adip incididunt ut labore et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit am et dolor. Lorem dolor sit am ',
  },
];

const Pagination = ({ centerSlideDataIndex }) => {
  return (
    <div className="flex justify-center gap-4 mt-28 my-20">
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
      <h1 className="text-center text-5xl md:text-6xl font-semibold text-subTitle">
        What our Customers say
      </h1>
      <h5 className="text-center text-sm md:text-lg mt-6 mb-10 md:mb-16 text-[#9598A0]">
        All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.
      </h5>
      <div className="relative w-full py-10">
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
            className="hidden md:block md:absolute top-[40%] left-[10%] z-10 border rounded-full p-5"
            onClick={() => {
              ref.current?.goBack();
            }}
          >
            <Icon icon="fe:arrow-left" color="#5f5f5f" width="12" height="12" />
          </div>
          <div
            className="hidden md:block md:absolute top-[40%] right-[10%] z-10 border rounded-full p-5"
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
