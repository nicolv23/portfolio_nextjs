import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';

const layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default layout;
