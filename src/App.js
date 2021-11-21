import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Detail from './Pages/Detail';
import Home from './Pages/Home';
import PaymentPortal from './Pages/PaymentPortal';
import GlobalStyles from './components/styles/Global';

function App() {

  return (
    <>
      <GlobalStyles/>
      <BrowserRouter>
        <Routes>
            <Route path='/detail' element={<Detail/>} > </Route>
            <Route path='/portal' element={<PaymentPortal/>} > </Route>
            <Route path='/' element={<Home/>}> </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
