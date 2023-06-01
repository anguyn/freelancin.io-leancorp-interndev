import React from 'react';

import Navbar from '../components/Navigation';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="relative">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
