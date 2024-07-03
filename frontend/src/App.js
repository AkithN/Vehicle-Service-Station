import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/guestpage/Guest';
import RegisterForm from './pages/registerpage/Register';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/RegisterForm' element={< RegisterForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;