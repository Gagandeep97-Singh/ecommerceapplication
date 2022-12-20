import React from 'react'
import './Cart.css'
import {BsFillArrowLeftCircleFill,BsCheckLg} from 'react-icons/bs';
import {RiMailSendFill} from 'react-icons/ri';


import { NavLink } from "react-router-dom";

const Success = () => {
  return (
    <div className="success">
    <h1>Thank You</h1>
    <div className="check">
    <BsCheckLg className="check_font"/>
    {/* <button className="order">#2478347RT</button> */}
    </div>
        <h3> 
        <span className="mail"><RiMailSendFill className="mail_font"/></span>
        we Have Recived Your Order You will Get the confirmation email in short we are very glad to have you</h3>
        <button className="go_back">
        <NavLink to="/">
        <BsFillArrowLeftCircleFill className="go_font"/>  Go Back
        </NavLink>
        </button>
    </div>
  )
}

export default Success