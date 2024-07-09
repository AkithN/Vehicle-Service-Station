import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/guestpage/Guest';
import RegisterForm from './pages/registerpage/Register';
import Login from './pages/loginpage/Login';
import Signup from './pages/signuppage/Signup';
import Garageowner from './pages/garageownerpage/Garageowner';
import Vehicleowner from './pages/vehicleownerpage/Vehicleowner';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/RegisterForm' element={< RegisterForm />} />
          <Route path='/login' element={< Login />} />
          <Route path='/signup' element={< Signup />} />
          <Route path='/garageowner' element={< Garageowner />} />
          <Route path='/vehicleowner' element={< Vehicleowner />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
