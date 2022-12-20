import React, { useContext }from 'react'
import {NavLink} from 'react-router-dom'
import {BsFillHandbagFill} from 'react-icons/bs'
import '../Layout/Global.css'
import contextprovider from '../Store/Contextprovider'

const Header = () => {

  

  const itemamount=useContext(contextprovider)
  // const totalitemsincart=itemamount.items.reduce((curtnum,items)=>{
  //   return curtnum +items.quantity
  // },0)
const totalitemsincart=itemamount.items.length


  return (
  <div className="header">
    <div className="header_box">
    <ul>
        <li>
            <NavLink to="/">
                Mika.
            </NavLink>
        </li>
        <li className="cart_button">
            <NavLink to="/Cart">

        <button className="cart_btn">
        <span className="cart_icon">
                <BsFillHandbagFill/>
        </span>
      <span className="cart_button_text">
    Your Cart
      </span>
      <span className="items">
        {totalitemsincart}
      </span>
        </button>
            </NavLink>
          
        </li>
    </ul>
    </div>
  </div>
  )
}

export default Header
