import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

import Header from './header.js';
import Banner1 from './banner1.js';
import Contact from './contact';

import About from './about.js';
import Section from './section.js';
import { BrowserRouter,Routes,Route } from "react-router-dom";
// import About from './about.js';



function Message() {
  return (
    <BrowserRouter>
         <Routes>
          
          <Route path="/" element={<Header />} >
          <Route index element={<Banner1/>} />
          <Route path="/section" element={<Section />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          </Route>
        </Routes>

      
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Message />)

