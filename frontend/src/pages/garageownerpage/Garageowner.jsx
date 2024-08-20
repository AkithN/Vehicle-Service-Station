import React from 'react'
import GarageOwnerProfile from '../../components/header/GarageOwnerProfile'
import Calender from '../../container/garageOwnerProfile/Calender'
import Footer from '../../components/footer/Footer';

const Garageowner = () => {
  return (
    <div>
      <GarageOwnerProfile>
        <Calender />
      </GarageOwnerProfile>
      <Footer />
    </div>
  );
};

export default Garageowner