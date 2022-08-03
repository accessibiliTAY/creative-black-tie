import React from "react";
import {Link, Outlet } from 'react-router-dom';
import './App.css';



const Header = () => {
    return (
        <>
            <div className="navsection">
                <div className="topping">
                    <span id="GOH">Guests of Honor</span>
                    <span id="resourcehub">resource hub</span>
                </div>
                <nav>
                    <Link className='navlink' id="homelink" to="/creative-black-tie/">Home</Link>
                    <Link className='navlink' id="femmelink" to="/creative-black-tie/Femmes">Femme Outfits</Link>
                    <Link className='navlink' id="masclink" to="/creative-black-tie/Mascs">Masc Outfits</Link>
                    <Link className='navlink' id="faqlink" to="/creative-black-tie/FAQ">Fast Facts</Link>
                </nav>
                <Outlet />
            </div>
        </>
    );
  };
  
  export default Header;