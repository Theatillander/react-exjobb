import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';

function App() {
  return (
      <div className="App">
        <Navbar />
        <Hero />
        <div className="CardSection">
        <Products />
        </div>
      </div>
  );
}

export default App;
