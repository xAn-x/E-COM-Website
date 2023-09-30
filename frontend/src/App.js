
import Header from "./Components/header/Header";
import Home from "./Components/home/Home";
import DetailView from "./Components/itemDetails/DetailView";
import Cart from "./Components/cart/CART";
import SuccessfulPurchase from "./Components/SuccessfulPurchase.jsx"

import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import {Box,styled} from "@mui/material"

const Body=styled(Box)`
  padding-top:75px;
`

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Body>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/product/:id' element={<DetailView/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/buySuccessfull' element={<SuccessfulPurchase/>}/>
            </Routes>
        </Body>
      </BrowserRouter>
    </div>
  );
}

export default App;
