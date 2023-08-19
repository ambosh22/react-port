import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';

import { Link } from 'react-router-dom';

 
const Navbar = () => {
    return(
       <nav className="navbar">
        <img src={logo} alt="Logo" className='logo' />
        <div className="desktopMenu">
        <a href='#' className="desktopMenuListItem" style={{color: "white"}}>Home</a>
        <a href='#skills' className="desktopMenuListItem" style={{color: "white"}}>Skills</a>
        <a href='#works' className="desktopMenuListItem" style={{color: "white"}}>Works</a>
       
        </div>
        
       </nav>
        
    )
}
export default Navbar;