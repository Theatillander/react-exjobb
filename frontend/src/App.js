import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import InfoCard from './components/InfoCard';
import Footer from './components/Footer';
import AdSection from './components/AdSection';
import ProductPage from './components/ProductPage';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ProductPageProducts from './components/ProductPageProducts';

function App() {
  return (
    <Router> 
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">  
            <Hero />
            <div className="CardSection">
              <Products />
            </div>
            <AdSection />
            <InfoCard/>
            <Footer />
          </Route>
          <Route path="/ProductPage">
            <ProductPage />
            <ProductPageProducts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



export default App;
