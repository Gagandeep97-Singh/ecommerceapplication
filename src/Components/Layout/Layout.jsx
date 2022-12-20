import React from "react";
import "./Global.css";
import cover1 from "../../assets/imgs/cover-1.png";
const Layout = () => {
  return (
    <>

    <div className="layout">
      <div className="layout_text">
        <h4 className="heading_first">Deal of the month</h4>
        <h1 className="heading_second">Enjoy Life With Leading Brand</h1>
        <h3 className="heading_third">UP TO 50% OFF ON ALL PRODUCTS</h3>
        {/* <h3 className="layout_des">
            Description
        </h3> */}
        <p className="para_des">
            Top brand is here check out now before getting out of stock we are giving huge discounts on all products
        </p>
        <button className="checkout" >Get Start</button>
      </div>
      <div className="img_box">
        <img src={cover1} alt="image" />
      </div>
    </div>
   
    </>
  );
};

export default Layout;
