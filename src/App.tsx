import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './scss/app.scss';
import './App.css';
import {Header} from "./components/Header";
import {Home} from "./pages/Home";
import {NotFound} from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";
import {Cart} from "./pages/Cart";
import {FullPizza} from "./pages/FullPizza";

export type PizzasType = {
  id: string,
  title: string,
  price: number,
  imageUrl: string,
  sizes: any,
  types: any
}

function App() {

  return (
    <div className="App">
      <div className="wrapper">

          <Header />
          <div className="content">
            <Routes>
              <Route path="/pizza" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/pizza/:id" element={<FullPizza />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>


      </div>
    </div>
  );
}

export default App;
