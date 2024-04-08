import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import InfoCard from './components/InfoCard';
import Footer from './components/Footer';
import AdSection from './components/AdSection';
import ProductPage from './components/ProductPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPageProducts from './components/ProductPageProducts';
import React from 'react';

function App() {
  return (
    <Router> 
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProductPage" element={<ProductPagesite />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <div className="CardSection">
        <Products />
      </div>
      <AdSection />
      <InfoCard/>
      <Footer />
    </>
  );
}

function ProductPagesite() {
  return(
  <>
    <ProductPage />
    <ProductPageProducts />
    <Footer />
  </>
  );
}

export default App;
