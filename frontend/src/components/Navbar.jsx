import '../style/navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="nav-wrapper">
    <div className="nav-content">
      <img className="logo" src="images/ESSENTIAL POSTERS.png" alt="Logo" />
      <div class="nav-wrapper">
      <ul class="menu-list">
        <li><a href="/" class="menu-item">HOME</a></li>
        <li><a href="ProductPage" class="menu-item">PRODUCTS</a></li>
        <li><a href="#" class="menu-item">SHOP ALL</a></li>
      </ul>
    </div>
    <div class="contact-btn-container">
      <a href="#" class="menu-item">NEWS</a>
      <button class="contact-btn">CONTACT US</button>
    </div>
  </div>
</div>
  );
}

export default Navbar;
