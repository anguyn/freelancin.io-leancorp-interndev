import React, { Fragment, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { Logo } from '../SVGs';
import { motion } from 'framer-motion';

const options = [
  { value: 'en', label: 'EN' },
  { value: 'vi', label: 'VI' },
];

const products = [
  {
    name: 'IT',
    href: '#',
  },
  {
    name: 'Digital Design',
    href: '#',
  },
  {
    name: 'Security',
    href: '#',
  },
  {
    name: 'Integrations',
    href: '#',
  },
  {
    name: 'Automations',
    href: '#',
  },
];

const Navbar = () => {
  const [color, setColor] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 50) setColor(true);
    else setColor(false);
  };

  window.addEventListener('scroll', changeColor);

  return (
    <header
      className={`fixed z-20 top-0 left-0 right-0 h-[80px] w-screen shadow-lg transition-all duration-400 ease-linear ${
        color ? 'bg-white ' : 'bg-transparent'
      } ${mobileMenuOpen ? 'bg-white' : null}`}
    >
      <nav
        className="m-auto flex max-w-maxWidth1 h-full items-center justify-between px-4 lg:py-4"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <Logo />
          </a>
        </div>
        <div className={`lg:hidden flex gap-4`}>
          <select
            className="flex items-center py-[8px] px-[24px] rounded-[22px] border bg-transparent border-subTitle text-navText outline-primary"
            // onChange={handleLanguagesChange}
            defaultValue={'en'}
          >
            {options?.map((option) => (
              <option
                key={option.value}
                value={option.value}
                className="text-base p-10 rounded-none"
              >
                {option.label}
              </option>
            ))}
          </select>
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-subTitle"
            onClick={() => setMobileMenuOpen(true)}
          >
            <div id="nav-icon3" className={mobileMenuOpen ? 'open' : null}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12 gap-[36px]">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-navText text-base">
              Services
              <Icon
                className="w-4 h-4 flex-none"
                aria-hidden="true"
                icon="iconamoon:arrow-down-2-fill"
                color="#6c768d"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute right-0 top-full z-10 mt-3 w-[200px] max-w-md overflow-hidden rounded-lg bg-white shadow-lg ring-gray-900/5">
                <div>
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group hover:bg-slate-300 relative flex items-center gap-x-6 rounded-lg p-3 text-navText text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex-auto">
                        <a href={item.href} className="block">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <ul className="flex gap-[36px] lg:gap-x-12 text-navText text-[16px]">
            <Link to="/" className="flex items-center">
              <span className="pr-[7px]">Explore</span>
            </Link>
            <Link to="/">About us</Link>
            <Link to="/">Blog</Link>
          </ul>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
          <select
            className="flex items-center py-[8px] px-[24px] rounded-[22px] border bg-transparent border-white text-navText outline-primary"
            // onChange={handleLanguagesChange}
            defaultValue={'en'}
          >
            {options?.map((option) => (
              <option
                key={option.value}
                value={option.value}
                className="text-base p-10 rounded-none"
              >
                {option.label}
              </option>
            ))}
          </select>
          <button className="px-[40px] py-[13px] rounded-full bg-primary text-white font-medium text-[16px] transition-all duration-250 ease-linear border border-transparent hover:bg-white hover:border hover:border-primary hover:text-primary">
            Contact us
          </button>
        </div>
      </nav>

      <Transition appear show={mobileMenuOpen}>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed z-10" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-10 mt-[80px] w-full overflow-y-auto bg-white sm:ring-1 sm:ring-gray-900/10">
              <div className="mt-4 px-6 py-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6 pt-0">
                    <Disclosure as="div" className="-mx-3">
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base leading-7  transition-all duration-150 ease-in hover:bg-lightPrimary hover:text-white">
                            Services
                            <Icon
                              icon="iconamoon:arrow-down-2-light"
                              className={`flex-none w-6 h-6 ${open ? 'rotate-180' : ''}`}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="mt-2 space-y-2">
                            {[...products].map((item) => (
                              <Disclosure.Button
                                key={item.name}
                                as="a"
                                href={item.href}
                                className="block rounded-lg py-2 pl-6 pr-3 text-sm leading-7 text-gray-900  transition-all duration-150 ease-in hover:bg-slate-400"
                              >
                                {item.name}
                              </Disclosure.Button>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                    <Link
                      to=""
                      className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 transition-all duration-150 ease-in hover:bg-lightPrimary hover:text-white"
                    >
                      Explore
                    </Link>
                    <Link
                      to="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900  transition-all duration-150 ease-in hover:bg-lightPrimary hover:text-white"
                    >
                      About us
                    </Link>
                    <Link
                      to="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900  transition-all duration-150 ease-in hover:bg-lightPrimary hover:text-white"
                    >
                      Blog
                    </Link>
                  </div>
                  <div className="py-6">
                    <Link
                      to="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base leading-7 text-gray-900  transition-all duration-150 ease-in hover:bg-lightPrimary hover:text-white"
                    >
                      Contact us
                    </Link>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </header>
  );
};

export default Navbar;
