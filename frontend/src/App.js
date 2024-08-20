import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/guestpage/Guest';
import RegisterForm from './pages/registerpage/Register';
import Login from './pages/loginpage/Login';
import Signup from './pages/signuppage/Signup';
import Garageowner from './pages/garageownerpage/Garageowner';
import GarageOffers from './pages/garageownerpage/GarageOffers';
import GarageNotification from './pages/garageownerpage/GarageNotification';
import GarageCustomer from './pages/garageownerpage/GarageCustomer';
import GarageSubscription from './pages/garageownerpage/GarageSubscription';
import GarageReports from './pages/garageownerpage/GarageReports';
import GarageMonthlyReport from './pages/garageownerpage/GarageMonthlyReport';
import GarageQuarterReport from './pages/garageownerpage/GarageQuarterReport';
import GarageYearReport from './pages/garageownerpage/GarageYearReport';
import ProfileManagement from './container/garageOwnerProfile/ProfileManagement';
import Vehicleowner from './pages/vehicleownerpage/Vehicleowner';
import VehicleOffers from './pages/vehicleownerpage/Offers';
import Admin from './pages/adminpages/Admin';
import ManageUsers from './pages/adminpages/users/ManageUsers';
import UpdateUsers from './pages/adminpages/users/UpdateUsers';
import ManageGarages from './pages/adminpages/garages/ManageGarages';
import ManageRoles from './pages/adminpages/roles/ManageRoles';
import ManageContacts from './pages/adminpages/contact/ManageContacts';
import AddRoles from './pages/adminpages/roles/AddRoles';
import UpdateRoles from './pages/adminpages/roles/UpdateRoles';
import VehicleOwnerFeatures from './pages/vehicleownerpage/Features';
import Experts from "./pages/vehicleownerpage/Experts";
import Aboutus from './components/aboutus/Aboutus';
import VContact from './pages/vehicleownerpage/Contact';
import BookingForm from './container/vehicleOwnerProfile/InquiryForm';
import Dealer from './pages/vehicleownerpage/FindDealer';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/RegisterForm' element={< RegisterForm />} />
          <Route path='/login' element={< Login />} />
          <Route path='/signup' element={< Signup />} />
          <Route path='/admin' element={< Admin />} />
          <Route path='/garageowner' element={< Garageowner />} />
          <Route path='/garageoffers' element={< GarageOffers />} />
          <Route path='/garagenotification' element={< GarageNotification />} />
          <Route path='/garagecustomer' element={< GarageCustomer />} />
          <Route path='/garagesubscription' element={< GarageSubscription />} />
          <Route path='/garagereports' element={< GarageReports />} />  
          <Route path='/garagemonthlyreport' element={< GarageMonthlyReport />} />
          <Route path='/garagequarterreport' element={< GarageQuarterReport />} />
          <Route path='/garageyearreport' element={< GarageYearReport />} />
          <Route path='/vehicleoffers' element={< VehicleOffers />} />
          <Route path='/dealer' element={< Dealer />} />
          <Route path='/profilemanagement' element={< ProfileManagement />} />
          <Route path='/vehicleowner' element={< Vehicleowner />} />
          <Route path='/admin/manage-users' element={<ManageUsers />} />
          <Route path='/admin/update-users' element={<UpdateUsers />} />
          <Route path='/admin/manage-garages' element={<ManageGarages />} />
          <Route path='/admin/manage-roles' element={<ManageRoles />} />
          <Route path='/admin/manage-contacts' element={<ManageContacts />} />
          <Route path='/admin/add-roles' element={<AddRoles />} />
          <Route path='/admin/update-roles' element={<UpdateRoles />} />
          <Route path='/features' element={<VehicleOwnerFeatures />} />
          <Route path='/experts' element={<Experts />} />
          <Route path='/aboutus' element={<Aboutus/>}/>
          <Route path='/contactus' element={<VContact/>}/>
          <Route path='/BookingForm' element={<BookingForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
