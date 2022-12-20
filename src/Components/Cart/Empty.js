import React from 'react'
import { NavLink } from 'react-router-dom';
import {BsFillArrowLeftCircleFill} from 'react-icons/bs';
import './Cart.css'
const Empty = () => {
  return (
    <div className="empty">
        <h1>
            There is not any item in the cart...
        </h1>
        <button className="go_back">
        <NavLink to="/">
        <BsFillArrowLeftCircleFill className="go_font"/>  Go To Shop 
        </NavLink>
        </button>
    </div>
  )
}

export default Empty
