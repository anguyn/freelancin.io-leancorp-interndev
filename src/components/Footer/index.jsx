import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className="bg-overlay relative z-0 items-center justify-center z-1 bg-primary text-white before:absolute before:bg-lightPrimary before:w-2/6 before:h-2/5 before:right-0 before:top-0 before:z-[-1]">
      <h1 className="text-white text-5xl md:text-6xl text-center pt-40">
        People who are <br /> ready took these courses!
      </h1>
      <div className="block mt-16 text-center">
        <button className="bg-white text-button2 font-medium rounded-[10px] py-[22px] px-[40px]">
          Schedule Appointment
        </button>
      </div>
      <div className="mx-auto flex flex-col gap-10 sm:grid sm:grid-cols-footer sm:gap-[5%] max-w-maxWidth1 px-4 text-xs my-16 phone:my-32">
        <div className="flex flex-col gap-6 text-center phone:text-left ">
          <h2 className="text-lg">FreeLancin.io</h2>
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 phone:grid phone:grid-cols-3">
          <div className="flex flex-col text-center phone:text-left gap-6">
            <h2 className="font-medium text-base">Links</h2>
            <Link to="/">Overons</Link>
            <Link to="/">Social Media</Link>
            <Link to="/">Counters</Link>
            <Link to="/">Contact</Link>
          </div>
          <div className="flex flex-col text-center phone:text-left gap-6">
            <h2 className="font-medium text-base">Company</h2>
            <Link to="/">Terms & Conditions</Link>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Contact</Link>
          </div>
          <div className="flex flex-col text-center phone:text-left gap-6">
            <h2 className="font-medium text-base">Get in touch</h2>
            <p>Crechterwoord K12 182 DK Alknjkcb</p>
            <a href="tel:+8485132567">085-132567</a>
            <a href="mailto:info@lobar.net">info@lobar.net</a>
          </div>
        </div>
      </div>
      <div className="pb-7">
        <p className="text-center text-xs ">© 2021 ar-shakir. All rights reserved</p>
      </div>
    </section>
  );
};

export default Footer;
