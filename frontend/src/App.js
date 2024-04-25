import './App.css';
import React,{ useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import InfoCard from './components/InfoCard';
import Footer from './components/Footer';
import AdSection from './components/AdSection';
import ProductPage from './components/ProductPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPageProducts from './components/ProductPageProducts';

function App() { 

  const startTime = performance.now();

  useEffect(() => {
    const endTime = performance.now();
    console.log(`Rendering Time for startime ${startTime}  and endtime ${endTime}`);
    /* measurementData.push(`${startTime} ${endTime}`); */
  });

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
