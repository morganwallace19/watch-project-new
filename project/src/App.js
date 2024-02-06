import React from 'react';

// import { Footer, Header } from './containers';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import { Hero, Navbar, About, Services, Shop } from './components';
import './App.css';
import Home from './components/home/Home';
// import Navbar from './components/navbar/Navbar'
import Cart from './components/cart/Cart';
import { ShopContextProvider } from './context/shop-context';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import { Shop } from './components';

// import { Article, Brand, CTA } from './components';

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
          <ShopContextProvider>
          <Router>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/shop' element={<Shop />} />
              <Route path='success' element={<Success />} />
              <Route path='cancel' element={<Cancel />} />
            </Routes>
          </Router>
          </ShopContextProvider>
            {/* <Routes>
            <Route path='/shop' element={<Shop />} />
            </Routes> */}
            {/* <Shop /> */}
          {/* <Header />
          <About />
          <Services />
          <Hero />
          <Footer /> */}
        </div>
    </div>
  )
}

export default App
