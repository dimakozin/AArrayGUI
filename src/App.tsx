import React, { Component } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import RouterLayout from './RouterLayout'

import Navbar from './Components/Navbar'

import NotFoundPage from './Pages/404/'
import ManagementPage from './Pages/Management/'
import ProfilePage from './Pages/Profile/';
import AboutPage from './Pages/About/';

import './css/App.css';
import 'animate.css'

export const eel = window.eel
if(!!eel){
  eel.set_host( 'ws://localhost:8080' )
}

export class App extends Component<{}, {}> {
  public render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
            <Routes>
              <Route path="/" element={<RouterLayout />}>
                <Route index element={<ManagementPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
