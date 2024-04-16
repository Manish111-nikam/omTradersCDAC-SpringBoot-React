import React from 'react'
import {Link} from "react-router-dom";
import './Message.css'

function Message() {
  return (
    <div>
        <marquee className="message"><h3>For More Visit !  <span className='name'> OM TRADERS </span> MAIN ROAD NASHIK <Link className='clkL' to='/locate'>click here to locate </Link></h3><h6>1093, Anand Height, Main Rd, opp. Chitra mandir cinema, Shinde Wada, Shalimar, Nashik, Maharashtra 422001</h6></marquee>
    </div>
  )
}

export default Message