import React,{useContext} from "react";
import { NavLink } from "react-router-dom";
import Contextdata from "../Store/Contextdata";
const Bestsalles = () => {
const data = useContext(Contextdata)
  const bestsellelist = data.slice(0, 10);

  return (
    <div className="sells">
      <h3 className="bestselles">Tranding Products</h3>
      <div className="tranding_products_list">
        <div className="products_list track">
          {bestsellelist.map((best) => {
            return (
              <div className="product_box " key={best.id}>
              <NavLink to={`detailpage/${best.id}`}>
                  <img src={best.img_url} alt={best.name} />
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Bestsalles;
