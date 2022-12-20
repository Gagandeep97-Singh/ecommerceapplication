import React from 'react'
import banner from '../../assets/headphones_b_1.webp'
import '../Layout/Global.css'
const Footer = () => {
  return (
   <div className="footer">
    <div className="background">
        <div className="footer_text">
            <p>20% OFF</p>
            <h1>FINE SMILE WITH MIKA.</h1>
            <h4>15 DEC 21</h4>
        </div>
        <div className="img">
            <img src={banner} alt="banner" />
        </div>
        {/* <div className="footer_last_text">
            <h1>summer sales</h1>
            <button>Check out</button>
        </div> */}
    </div>
    <h4 className="rights">
      @2022  All Rights Reserved
    </h4>
   </div>
  )
}

export default Footer
