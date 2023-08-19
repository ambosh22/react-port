import React from 'react';
import './footer.css';
import Logo1 from '../../assets/logo-1.png';
const Footer = () =>{
    return(
            <footer className='footer'>
              <div className='img'>
                <img src={Logo1} alt=""/>
               <p> Phinma-University of Pangasinan</p>
               <p>College Of Information Technology</p>
               </div>
            </footer>
    )
}
export default Footer;