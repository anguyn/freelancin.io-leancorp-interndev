import React, { useState, useRef } from 'react';
import Carousel from 'react-multi-carousel';
import { Icon } from '@iconify/react';
import 'react-multi-carousel/lib/styles.css';
import { motion, AnimatePresence } from 'framer-motion';
import Project1 from '../../assets/images/Home/Projects/Project1.png';
import Project2 from '../../assets/images/Home/Projects/Project2.png';
import Project3 from '../../assets/images/Home/Projects/Project3.png';
import Project4 from '../../assets/images/Home/Projects/Project4.png';
import Project5 from '../../assets/images/Home/Projects/Project5.png';
import Project6 from '../../assets/images/Home/Projects/Project6.png';
import Project7 from '../../assets/images/Home/Projects/Project7.png';
import Project8 from '../../assets/images/Home/Projects/Project8.jpg';

const tabs = [
  {
    id: 'all',
    label: 'All',
  },
  {
    id: 'websites',
    label: 'Websites',
  },
  {
    id: 'social',
    label: 'Social Media',
  },
  {
    id: 'ui',
    label: 'UI/UX',
  },
  {
    id: 'market',
    label: 'Market',
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1200, min: 1080 },
    items: 3,
    slidesToSlide: 1,
  },
  largeMobile: {
    breakpoint: { max: 1080, min: 640 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const projects = [
  {
    image: Project1,
    name: 'Quarter',
    type: 'Company Website',
  },
  {
    image: Project2,
    name: 'Hotelmania',
    type: 'Company Website',
  },
  {
    image: Project3,
    name: 'Furnishop',
    type: 'Company Website',
  },
  {
    image: Project4,
    name: 'Thrive CBD',
    type: 'Company Website',
  },
  {
    image: Project5,
    name: 'Adora Montminy',
    type: 'Company Website',
  },
  {
    image: Project6,
    name: 'Troy Stockert',
    type: 'Company Website',
  },
  {
    image: Project7,
    name: 'Styleable',
    type: 'Company Website',
  },
  {
    image: Project8,
    name: 'Omega',
    type: 'Company Website',
  },
];

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const Projects = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const carouselRef = useRef();
  const [selectedProjects, setSelectedProjects] = useState(projects);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const selectTab = () => {
    const copiedItems = [...projects];
    const selectedItems = [];

    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * copiedItems.length);

      const selectedItem = copiedItems.splice(randomIndex, 1)[0];
      selectedItems.push(selectedItem);
    }
    setSelectedProjects(selectedItems);
  };
  return (
    <div className="mb-36">
      <h1 className="text-center text-4xl phone:text-5xl md:text-6xl font-semibold text-subTitle">
        Our Projects
      </h1>
      <h5 className="text-center text-lg mt-6 mb-12 text-[#9598A0]">
        We have been providing great <br /> flooring solutions service.
      </h5>
      <div className="flex flex-col sm:flex-row gap-5 items-center justify-center space-x-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              if (tab.id !== 'all') selectTab();
              else setSelectedProjects(projects);
            }}
            className={`${
              activeTab === tab.id ? 'text-white bg-transparent' : 'bg-[#F1F1F1] text-[#ACACAC]'
            } relative rounded-full w-[120px] py-1.5 text-sm font-medium  outline-sky-400 transition focus-visible:outline-2`}
            style={{
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute w-[120px] inset-0 z-10 rounded-full bg-primary mix-blend-lighten"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            {tab.label}
          </button>
        ))}
      </div>
      <div className="flex justify-center sm:justify-end sm:px-4 gap-4 max-w-maxWidth1 my-10 mx-auto">
        <div
          className="border rounded-full p-5 cursor-pointer"
          onClick={() => {
            carouselRef.current.previous();
          }}
        >
          <Icon icon="fe:arrow-left" color="#5f5f5f" width="12" height="12" />
        </div>
        <div
          className="border rounded-full p-5 cursor-pointer"
          onClick={() => {
            carouselRef.current.next();
          }}
        >
          <Icon icon="fe:arrow-left" color="#5f5f5f" width="12" height="12" hFlip={true} />
        </div>
      </div>
      <Carousel
        ref={carouselRef}
        swipeable={true}
        arrows={false}
        showDots={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        keyBoardControl={true}
        sliderClass="-mr-[40px]"
        itemClass="flex justify-center items-center sm:block sm:-mr-[40px] sm:ml-[40px]"
      >
        {selectedProjects?.map((item, index) => (
          <motion.div
            key={index}
            className="relative flex w-[380px] h-[300px] sm:w-[340px] sm:h-[256px] rounded overflow-hidden"
            initial={false}
            animate={
              isLoaded && isInView
                ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
            }
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            onViewportEnter={() => setIsInView(true)}
          >
            <img
              src={item.image}
              className="w-full h-full object-cover"
              alt={`website + ${index}`}
              onLoad={() => setIsLoaded(true)}
            />
            <div className="absolute h-full p-3.5 text-white w-full bottom-0 left-0 flex flex-col justify-end bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.58)]">
              <h5 className="font-semibold mb-2">{item.name}</h5>
              <p className="font-normal text-sm">{item.type}</p>
            </div>
          </motion.div>
        ))}
      </Carousel>
    </div>
  );
};

export default Projects;
