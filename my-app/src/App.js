import React from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import { Box } from '@mui/material';
import DataProvider from './context/Dataprovider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailView from './components/details/DetailView';
import BuyNow from './components/cart/BuyNow';
const App = () => {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ paddingTop: 54 }}>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='product/:id' element={<DetailView/>} />
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/BuyNow' element={<BuyNow/>}/>
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider >
  );
}

export default App;
