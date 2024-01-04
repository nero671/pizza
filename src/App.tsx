import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './scss/app.scss';
import './App.css';
import {Header} from "./components/Header";
import {Home} from "./pages/Home";
import {NotFound} from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";
import {Cart} from "./pages/Cart";

export type PizzasType = {
  id: string,
  title: string,
  price: number,
  imageUrl: string,
  sizes: any,
  types: any
}

// @ts-ignore
export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="App">
      <div className="wrapper">
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
          <Header

          />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home searchValue={searchValue} />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </SearchContext.Provider>

      </div>
    </div>
  );
}

export default App;
