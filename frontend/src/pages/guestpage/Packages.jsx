import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import GuestPackages from '../../container/packages/GuestPackages';
import PackageHeader from '../../components/header/PackageHeader';

const Packages = () => {

  return (
    <div>
      <Navbar />
      <PackageHeader />
      <GuestPackages/>
      <Footer />
    </div>
  );
};

export default Packages;
