import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Detail from './Pages/Detail';
import Home from './Pages/Home';
import GlobalStyles from './components/styles/Global';
import Page404 from './Pages/Page404';
import { Helmet } from 'react-helmet';

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
      <Helmet>
        <title> Trada - a platform for trading for collectibles, giftcards and valuable items. </title>
      </Helmet>
      <BrowserRouter>
        <Routes>
            <Route path='/detail/:productid' element={<Detail />} />
            <Route path='/' element={<Home/>}/>
            <Route path="*" element={<Page404/>}> </Route> 
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
