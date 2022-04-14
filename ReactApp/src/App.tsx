import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import RouterLayout from './RouterLayout'

import Navbar from './Components/Navbar'

import NotFoundPage from './Pages/404/'
import ManagementPage from './Pages/Management/'
import ProfilePage from './Pages/Profile/';
import AboutPage from './Pages/About/';

import './css/App.css';


function App() {
  return (
    <div className="App">
    <Navbar />
      <Routes>
        <Route path="/" element={<RouterLayout />}>
          <Route index element={<ManagementPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;

