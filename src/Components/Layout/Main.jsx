import React from 'react';
import Layout from "./Layout";
import "./Global.css";
import Bestsalles from "./Bestsalles";
import Productlist from "./Productlist";
import Wave from './Wave'
import Footer from '../Footer/Footer';
import Header from '../Head/Header';

const Main = ({quantity,setquantity}) => {


  return (
    <>
      
        <Header quantity={quantity} setquantity={setquantity}/>
        <Layout />
        <Wave />
          <Bestsalles />
          <Productlist/>
        <Footer />
    </>
  );
};

export default Main;
