import React from 'react';
import { BrowserRouter,Switch,Route, Routes } from 'react-router-dom';
import "./App.css";
import Home from './pages/Home';
import Netflixshow from './pages/Netflixshow';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrolltoTop/ScrollToTop';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollToTop />
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/netflix-show" element={<Netflixshow />} />
        </Routes>
        <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;
