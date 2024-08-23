import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import GuestPackages from '../../container/packages/GuestPackages';
import axios from 'axios';

const Packages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    // Fetch packages from the backend
    axios.get('/api/packages')
      .then(response => setPackages(response.data))
      .catch(error => console.error('Error fetching packages:', error));
  }, []);

  return (
    <div>
      <Navbar />
      <GuestPackages packages={packages} />
      <Footer />
    </div>
  );
};

export default Packages;
