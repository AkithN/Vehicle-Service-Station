import * as React from 'react';
import VehicleOwnerNavbar from '../../components/navbar/VehicleOwnerNavbar';
import VehicleOwnerHeader from '../../components/header/VehicleOwnerHeader';
import FindDealer from '../../container/vehicleOwnerProfile/FindDealer';
import Garages from '../../container/vehicleOwnerProfile/Garages';
import Offers from '../../container/vehicleOwnerProfile/Offers';
import Footer from '../../components/footer/Footer';

function VehicleOwner() {
  return (
    <div>
      <VehicleOwnerNavbar />
      <VehicleOwnerHeader />
      <FindDealer />
      <Garages />
      <Offers />
      <Footer />
    </div>
  );
}

export default VehicleOwner;
