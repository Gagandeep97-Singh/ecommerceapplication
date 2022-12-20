import React, { useContext } from "react";
import "./Cart.css";
import contextprovider from "../Store/Contextprovider";
import Empty from "./Empty";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';




const Cart = () => {
  const cartctx = useContext(contextprovider);
  const rendringtotalamount = cartctx.items.length > 0;

  const notify=()=>toast.warn('Item has removed from cart', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });

  const handleremove = (id, price) => {
    cartctx.removeitem(id, price);
    notify();
  };

  

  return (
    <>

  
    <div className="cart_main">
      {cartctx.items.map((item) => {
        return (
          <div className="item_box">
            <div className="cart_img_box">
              <img src={item.img_url} alt={item.name} />
            </div>
            <div className="cat">
              <h3>{item.category}</h3>
            </div>
            <div className="item_name">
              <h2>{item.name}</h2>
            </div>
            <div className="cart_item_price">
              <h3 className="price">{item.price}$</h3>
            </div>
            <div className="cart_item_remove">
              <p
                className="remove"
                onClick={()=>handleremove(item.id,item.price)}
              >
                Remove
              </p>
            </div>
          </div>
        );
      })}
      {rendringtotalamount ? (
        <div className="total">
          <button className="check_out">
            <NavLink to="/done" >Buy Now</NavLink>
          </button>
          <h2>Total Amount:{cartctx.totalamount}$</h2>
        </div>
      ) : (
        <Empty />
      )}
    </div>
    <ToastContainer />
    
    </>

  );
};

export default Cart;
