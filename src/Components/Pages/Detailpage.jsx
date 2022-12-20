import React, { useContext,useState} from "react";
import { useParams } from "react-router-dom";
import Contextdata from "../Store/Contextdata";
import contextprovider from "../Store/Contextprovider";
import Header from '../Head/Header';
import '../Layout/Global.css';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


import {
  AiFillStar,
  AiOutlineStar,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";




const Detailpage = () => {

const [quantity,setquantity]=useState(1)



  const { id } = useParams();
  const data = useContext(Contextdata);
  const cartcxt=useContext(contextprovider)

  


const incrementCount=()=>{
  setquantity((prev)=>{
    if (prev>=4){
     return prev=4;
    }
    else{
      return prev+1;
    }
  });
}

const decrementCount=()=>{
  setquantity((prev)=>{
    if (prev<=1){
      return prev=1;
     }
     else{
       return prev-1;
     }
  })
}

const handleAddtocart=(item)=>{
  cartcxt.additems(item);
}

const notify = () => toast.success('Item has add to cart', {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
  });;


const handleboth=(item)=>{
  cartcxt.additems(item);
  notify()
}

  const detail_product = data.filter((product) => product.id === id);
  const detail_data = detail_product.map((data) => {
    return (
      <>
      <Header/>
      <div className="detail_data" key={data.id}>
        <div className="data_img_box" key={data.id}>
          <img src={data.img_url} alt={data.name}/>
        </div>
        <div className="detail_content" >
          <div className="data_name">
            <h2>{data.name}</h2>
          </div>
          <div className="star_icons">
            <AiFillStar className="star" />
            <AiFillStar className="star" />
            <AiFillStar className="star" />
            <AiFillStar className="star" />
            <AiOutlineStar className="star" />
          </div>
          <div className="detail">
            <h3 className="product_detail">Detail</h3>
            <p className="product_context">{data.description}</p>
          </div>
          <div className="product_price">
            <h3 className="price">{data.price}$</h3>
          </div>
          <div className="quantity">
            Quantity
            <div className="button_container"></div>
            <button className="dec btns" onClick={decrementCount}>
              <AiOutlineMinus />
            </button>
            <div className="count">{quantity}</div>
            <button className="inc btns" onClick={incrementCount}>
              <AiOutlinePlus />
            </button>
          </div>
          <div className="page_buttons">
            <button className="addtocart detail_page_btn" onClick={()=>handleboth(data)}>Add to cart</button>
            <button className="buy_now detail_page_btn">Buy now</button>
          </div>
        </div>
      </div>
      </>

    );
  });

  return (
    <>
    
      <div className="detail_main_page">{detail_data}</div>
    <ToastContainer />
      
    </>
  );
};

export default Detailpage;
