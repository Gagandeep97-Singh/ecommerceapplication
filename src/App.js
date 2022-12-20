import React from "react";
import Main from "./Components/Layout/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from "./Components/Pages/Detailpage";
import Cart from "./Components/Cart/Cart";
import Store from "./Components/Store/Store";
import Reduceprovider from "./Components/Store/Reduceprovider"
import Success from './Components/Cart/Success'
const App = () => {




  return (
    <Store>
      <Reduceprovider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/detailpage/:id" element={<DetailPage/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/done" element={<Success/>} />

          </Routes>
        </BrowserRouter>
      </Reduceprovider>
    </Store>
  );
};

export default App;
