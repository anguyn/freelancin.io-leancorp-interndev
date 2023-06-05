import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-overlay relative z-0 items-center justify-center z-1 bg-primary text-white before:absolute before:bg-lightPrimary before:w-2/6 before:h-2/5 before:right-0 before:top-0 before:z-[-1]">
      <h1
        className="text-white text-5xl md:text-6xl text-center pt-40"
        dangerouslySetInnerHTML={{ __html: t('footer.title') }}
      ></h1>
      <div className="block mt-16 text-center">
        <button className="bg-white text-button2 font-medium rounded-[10px] py-[22px] px-[40px] transition-all duration-200 ease-linear hover:text-primary hover:scale-105 hover:font-semibold">
          {t('footer.button')}
        </button>
      </div>
      <div className="mx-auto flex flex-col gap-10 sm:grid sm:grid-cols-footer sm:gap-[5%] max-w-maxWidth1 px-4 text-xs my-16 phone:my-32">
        <div className="flex flex-col gap-6 text-center phone:text-left ">
          <h2 className="text-lg">FreeLancin.io</h2>
          <p>{t('footer.address')}</p>
        </div>
        <div className="flex flex-col justify-center gap-5 phone:grid phone:grid-cols-3">
          <div className="flex flex-col text-center phone:text-left gap-6">
            <h2 className="font-medium text-base">{t('footer.links')}</h2>
            <Link to="/">{t('footer.overons')}</Link>
            <Link to="/">{t('footer.social')}</Link>
            <Link to="/">{t('footer.counters')}</Link>
            <Link to="/">{t('footer.contact')}</Link>
          </div>
          <div className="flex flex-col text-center phone:text-left gap-6">
            <h2 className="font-medium text-base">{t('footer.company')}</h2>
            <Link to="/">{t('footer.terms')}</Link>
            <Link to="/">{t('footer.privacy')}</Link>
            <Link to="/">{t('footer.contact')}</Link>
          </div>
          <div className="flex flex-col text-center phone:text-left gap-6">
            <h2 className="font-medium text-base">{t('footer.touch')}</h2>
            <p>Crechterwoord K12 182 DK Alknjkcb</p>
            <a href="tel:+8485132567">085-132567</a>
            <a href="mailto:info@lobar.net">info@lobar.net</a>
          </div>
        </div>
      </div>
      <div className="pb-7">
        <p className="text-center text-xs ">{t('footer.copyright')}</p>
      </div>
    </section>
  );
};

export default Footer;
