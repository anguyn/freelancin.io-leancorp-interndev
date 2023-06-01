import React from 'react';

const Card = React.memo(function (props) {
  const { data, dataIndex } = props;
  const { cover, name, job, feedback } = data[dataIndex];
  return (
    <div className="w-full h-[450px] bg-white p-20 flex flex-col justify-center items-center select-none shadow-[0px_20px_60px_0px_#2e213d14]">
      <img
        className="h-[106px] w-[106px] object-cover rounded mt-[54px]"
        src={cover}
        alt={`customer ${dataIndex}`}
      />
      <h3 className="font-semibold mt-2 mb-4 text-xl md:text-3xl text-[#171C2C]">{name}</h3>
      <h5 className="mb-6 text-sm md:text-lg text-[#9598A0]">{job}</h5>
      <p className="text-sm md:text-lg text-center text-[#9598A0]">{feedback}</p>
    </div>
  );
});

export default Card;
