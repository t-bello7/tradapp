import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Detail from './Pages/Detail';
import Home from './Pages/Home';
import PaymentPortal from './Pages/PaymentPortal';
import GlobalStyles from './components/styles/Global';
import Page404 from './Pages/Page404';

const theme = {
  colors:{
    header: '#141920'
  },
  mobile: '40rem',
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <BrowserRouter>
        <Routes>
            <Route path='/detail/:id' element={<Detail/>} />
            <Route path='/portal' element={<PaymentPortal/>} />
            <Route path='/' element={<Home/>}/>
            <Route path="*" element={<Page404/>}> </Route> 

        </Routes>
      </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
