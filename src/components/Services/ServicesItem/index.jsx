import React from 'react';
const ServicesItem = ({ icon, title, description }) => {
  return (
    <>
      <p className="flex items-center justify-center">{icon}</p>
      <div>
        <p className="text-sm md:text-[20px] font-semibold uppercase pb-[25px]">{title}</p>
        <p className="text-sm md:text-[16px] text-subTitle">{description}</p>
      </div>
    </>
  );
};

export default ServicesItem;
