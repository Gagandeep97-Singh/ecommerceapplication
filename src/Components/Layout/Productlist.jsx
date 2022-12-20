import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import Contextdata from "../Store/Contextdata";

const Productlist = () => {
  const data = useContext(Contextdata);
  const [productdata, setproductdata] = useState(data);

  const categories = productdata.map((data_cat) => {
    return data_cat.category;
  });

  const uniqueCategory = ["All", ...new Set(categories)];

  const [buttons, setbuttons] = useState(uniqueCategory);


  const filterproduct = (categories) => {
    if (categories === "All") {
      setproductdata(data);
      return;
    }
    const category = data.filter((product) => {
      return product.category === categories;
    });
    setproductdata(category);
  };

  return (
    <div className="productlist_box">
      <div className="product_filter_box">
        <div className="cat">Categories</div>
        <ul>
          {buttons.map((cats, inx) => {
            return (
              <li className="cat_btns" key={inx} onClick={()=>filterproduct(cats)}>
                {cats}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="product_list_box">
        {productdata.map((product) => {
          return (
            <div className="container" key={product.id}>
              <NavLink to={`detailpage/${product.id}`}>
                <div className="product_img">
                  <img src={product.img_url} alt={product.name} />
                </div>
                <div className="product_content">
                  <h3 className="product_name">{product.name}</h3>
                  <h3 className="price">{product.price}$</h3>
                </div>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Productlist;
