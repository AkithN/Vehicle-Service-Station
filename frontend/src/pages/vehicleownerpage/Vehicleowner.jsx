import * as React from 'react';
import VehicleOwnerNavbar from '../../components/navbar/VehicleOwnerNavbar';
import VehicleOwnerHeader from '../../components/header/VehicleOwnerHeader';
import FindDealer from '../../container/vehicleOwnerProfile/FindDealer';
import Garages from '../../container/vehicleOwnerProfile/Garages';
import TopOffers from '../../container/vehicleOwnerProfile/TopOffers';
import Footer from '../../components/footer/Footer';

function VehicleOwner() {
  return (
    <div>
      <VehicleOwnerNavbar />
      <VehicleOwnerHeader />
      <FindDealer />
      <Garages />
      <TopOffers />
      <Footer />
    </div>
  );
}

export default VehicleOwner;
