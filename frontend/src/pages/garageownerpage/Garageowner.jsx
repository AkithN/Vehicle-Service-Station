import React from 'react'
import GarageOwnerProfile from '../../components/header/GarageOwnerProfile'
import Calender from '../../container/garageOwnerProfile/Calender'
import Footer from '../../components/footer/Footer';

const Garageowner = () => {
  return (
    <GarageOwnerProfile>
      <Calender />
      <Footer />
    </GarageOwnerProfile>
  );
};

export default Garageowner