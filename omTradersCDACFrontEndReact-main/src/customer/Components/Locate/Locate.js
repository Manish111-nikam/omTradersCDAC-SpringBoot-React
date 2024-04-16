// Locate.js

import React from 'react';
import './Locate.css';
import { Link } from 'react-router-dom';

function Locate() {
  return (
    <div className='locate'>
      <div className='logo'>
        <Link to='/'>
          <img className='login_logo' src='om_icon.jpg' alt="Logo" />
        </Link>
        </div>
      {/* Left side: Store information */}
      <div className='info-container'>
        <div className='store-info'>
          <h2 style={{color:'red'}}>OM TRADERS </h2>
          <div className='store-details'>
            <p style={{color:'green'}}><strong>"Discover convenience, explore quality – visit us today!"</strong>...Om Traders</p>
            <p><strong>Mobile No:</strong> +91 9371755500 / 0253-2505250 / 0253-2508250</p>
            <p><strong>Address:</strong> <a target="_blank" href='https://www.google.com/maps/dir//1093,+Anand+Height,+Main+Rd,+opp.+Chitra+mandir+cinema,+Shinde+Wada,+Shalimar,+Nashik,+Maharashtra+422001/@19.8705152,75.350016,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bddeb4b286f049d:0xc5840dfdd4262cbf!2m2!1d73.7890942!2d20.0033596?entry=ttu'>1093, Anand Height, Main Rd, Shinde Wada, Shalimar, Nashik, Maharashtra 422001</a></p>
          </div>
          
          <div className='social-media'>
          <p><strong style={{color:'#1877F2'}}>facebook :</strong> <a target="_blank" href='https://www.facebook.com/OmTradersNashik/'> Om Traders </a></p>
          <p><strong style={{color:'#d62976'}}>Instagram :</strong> <a target="_blank" href='https://www.instagram.com/omtradersnashik/'> Om Traders </a></p>
          <p><strong style={{color:'#FF0000'}}>Youtube :</strong> Om Traders</p>
          <p><strong style={{color:'#1DA1F2'}}>Twitter :</strong> Om Traders</p>
          <p><strong style={{color:'#FF0000'}}>Mail :</strong> <Link to='/contactMail'>Om Traders</Link></p>
          </div>
        </div>
      </div>

      {/* Right side: Map */}
      <div className='map-container'>
        <iframe 
          className='map-frame'
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Om%20Traders,%201093,%20Anand%20Height,%20Main%20Rd,%20opp.%20Chitra%20mandir%20cinema,%20Shinde%20Wada,%20Shalimar,%20Nashik,%20Maharashtra%20422001+(OM%20TRADERS)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          frameborder="0"
          allowfullscreen
          loading="lazy"
        ></iframe>
      </div>
    
    </div>
  );
}

export default Locate;
