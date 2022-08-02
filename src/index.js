import React from 'react';
import './index.css';
import App from './App';
import { render } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Femmes from './Femmes';
import Mascs from './Mascs';
import FAQ from './FAQ';


const root = document.getElementById('root');

render (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Header />} >
        <Route index element={
          <main className='mainwell'>
            <Home />
          </main>
        }></Route>
        <Route path='/Femmes' element={
          <main className='mainwell'>
            <Femmes />
          </main>
        }></Route>            
        <Route path='/Mascs' element={
          <main className='mainwell'>
            <Mascs />
          </main>
        }></Route>
        <Route path='/FAQ' element={
          <main className='mainwell'>
            <FAQ />
          </main>
        }></Route>          
      </Route>
    </Routes>
  </BrowserRouter>,
  root
);


