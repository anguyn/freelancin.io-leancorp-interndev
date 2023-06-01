import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Journey from '../components/Journey';
import Header from '../components/Header';
import Features from '../components/Features';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Testimonial from '../components/Testimonial';
import Agents from '../components/Agents';

const Home = () => {
  return (
    <MainLayout>
      <Header />
      <Journey />
      <Features />
      <Services />
      <Projects />
      <Testimonial />
      <Agents />
    </MainLayout>
  );
};

export default Home;
