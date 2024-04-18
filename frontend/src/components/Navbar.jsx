import '../style/navbar.css';

function Navbar() {
  return (
    <div className="nav-wrapper">
    <div className="nav-content">
      <img className="logo" src="images/ESSENTIAL POSTERS.png" alt="Logo" />
      <div className="nav-wrapper">
      <ul className="menu-list">
        <li><a href="/" className="menu-item">HOME</a></li>
        <li><a href="ProductPage" className="menu-item">SHOP ALL</a></li>
        <li><a href="#" className="menu-item">FRAMES</a></li>
      </ul>
    </div>
    <div className="contact-btn-container">
      <a href="#" className="menu-item">NEWS</a>
      <button className="contact-btn">CONTACT US</button>
    </div>
  </div>
</div>
  );
}

export default Navbar;
