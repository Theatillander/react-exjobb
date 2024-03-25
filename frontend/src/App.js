import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  return (
      <div className="App">
        <Navbar />
        <Hero />
        <div className="CardSection">
        <Products />
        </div>
        <Footer />
      </div>
  );
}

export default App;
