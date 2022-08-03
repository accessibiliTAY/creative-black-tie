import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Femmes from './Femmes';
import Mascs from './Mascs';
import FAQ from './FAQ';


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Header />} >
        <Route exact path='/creative-black-tie/' element={
          <main className='mainwell'>
            <Home />
          </main>
        }></Route>
        <Route path='/creative-black-tie/Femmes' element={
          <main className='mainwell'>
            <Femmes />
          </main>
        }></Route>            
        <Route path='/creative-black-tie/Mascs' element={
          <main className='mainwell'>
            <Mascs />
          </main>
        }></Route>
        <Route path='/creative-black-tie/FAQ' element={
          <main className='mainwell'>
            <FAQ />
          </main>
        }></Route>
        <Route
        path="*"
        element={
          <main className='mainwell'>
            <h1>{'There is nothing here'}</h1>
          </main>
        }
        />          
      </Route>
    </Routes>
  </BrowserRouter>
  );
};

export default App;
